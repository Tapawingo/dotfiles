#!/bin/sh
if hash picom >/dev/null 2>&1; then
	pkill picom
	picom &
fi

if hash xbanish >/dev/null 2>&1; then
	pkill xbanish
	xbanish -t 1 &
fi

if hash dwmblocks >/dev/null 2>&1; then
	pkill dwmblocks
	dwmblocks &
fi

### quality of life ###
xwallpaper --zoom ~/pictures/walls/cbwall.jpg
setxkbmap us -variant intl # Set keyboard to US International
xset r rate 215 40 # Allow more polykeys
xrdb -load $HOME/.config/x11/xresources
xinput set-prop 10 "Coordinate Transformation Matrix" 2.4 0 0 0 2.4 0 0 0 1 # Set higher mouse speed on mousepad

# audio dameon
$HOME/.config/dwm/audio_server.sh &

# notification dameon
dunst &
