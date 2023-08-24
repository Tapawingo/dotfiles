#!/bin/sh

mute=$(pamixer --get-mute)
volume=$(pamixer --get-volume-human)

if [ "$mute" == "true" ]
then
    echo "🔈 $volume"
else
    echo "🔈 $volume"
fi
