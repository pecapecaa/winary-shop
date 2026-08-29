#!/usr/bin/env python3
"""Cut the bottle out of a studio photograph for the product page.

Two decisions worth knowing, both reached by measuring rather than guessing:

1. The matte is a ramp, not a threshold. The subject is lit against pure
   black (sampled 0,0,0 in the corners), so brightness is coverage. Binary
   keying cannot work on this set: the studio halo behind the bottle sits at
   9-20 luminance and the bottle's own dark neck at 18-49, so every threshold
   that removes the halo also eats the neck. The ramp keeps both — halo as a
   faint glow, dark glass as glass.

2. The crop is fixed, not detected. Every automatic bound tried here was
   fooled by something: brightness finds the lit marble floor, which on the
   red-wine bottles is brighter than the bottle; column mass finds the label
   specular; column height finds the halo, which is as tall as the bottle.
   Measured across all five photographs the studio setup is consistent to
   within a couple of percent (centre 49.0-50.5%, subject width 24.6-32.5%,
   top 4-7%), so a fixed window with generous margin is both simpler and more
   predictable. A future photograph shot differently will look wrong
   immediately rather than subtly.
"""
import sys, numpy as np
from PIL import Image

CENTRE, HALF_W = 0.50, 0.22
TOP, BOTTOM = 0.02, 0.97

def cutout(src, dst, gain=1.9, gamma=0.82, solid_at=64):
    im = Image.open(src).convert('RGB')
    a = np.asarray(im).astype(np.float32)
    lum = 0.299*a[:,:,0] + 0.587*a[:,:,1] + 0.114*a[:,:,2]
    h, w = lum.shape

    # Lift the black point off whatever the corners actually are before the
    # ramp runs. Most of these photographs sit on a true 0, but one edited
    # copy in the set has a 22-level background, and feeding that straight
    # into the ramp would make its backdrop 80% opaque — a grey slab instead
    # of a cut-out bottle.
    corner = np.percentile(np.concatenate([
        lum[:40, :40].ravel(), lum[:40, -40:].ravel(),
        lum[-40:, :40].ravel(), lum[-40:, -40:].ravel()]), 80)
    lum = np.clip(lum - corner - 1.0, 0, None)

    al = np.clip(np.clip(lum/solid_at, 0, 1) ** gamma * gain, 0, 1)

    L, R = int(w*(CENTRE-HALF_W)), int(w*(CENTRE+HALF_W))
    T, B = int(h*TOP), int(h*BOTTOM)

    # Let the reflection dissolve instead of ending on a horizontal cut, and
    # feather the two side edges so the crop window itself never shows.
    fade = int((B-T)*0.14)
    al[B-fade:B] *= (np.linspace(1, 0, fade) ** 1.3)[:, None]
    edge = int((R-L)*0.06)
    ramp = np.linspace(0, 1, edge)
    al[:, L:L+edge] *= ramp[None, :]
    al[:, R-edge:R] *= ramp[::-1][None, :]

    out = Image.fromarray(a.astype(np.uint8), 'RGB').convert('RGBA')
    out.putalpha(Image.fromarray((al*255).astype(np.uint8), 'L'))
    out = out.crop((L, T, R, B))
    out.save(dst, 'WEBP', quality=92, method=6, exact=True)
    return out.size

if __name__ == '__main__':
    print('%-38s %s' % (sys.argv[2], cutout(sys.argv[1], sys.argv[2])))
