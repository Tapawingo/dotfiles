#!/bin/sh
ICON=""
capacity0=$(cat /sys/class/power_supply/BAT0/capacity)
capacity1=$(cat /sys/class/power_supply/BAT1/capacity)
status0=$(cat /sys/class/power_supply/BAT0/status)
status1=$(cat /sys/class/power_supply/BAT1/status)

capacity=$(awk "BEGIN { print int((($capacity0 + $capacity1) / 198) * 100) }")

if [ "$status0" == "Charging" ] || [ "$status1" == "Charging" ] 
then
    echo "⚡ $capacity%"
else
    echo "🔋 $capacity%"
fi
