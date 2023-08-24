#!/bin/sh

type=$(nmcli -f TYPE con show --active | sed -n '2p' | tr -d " \t\n\r" )
name=$(nmcli -f NAME con show --active | sed -n '2p' | tr -d " \t\n\r" )

if [ $type == "wifi" ]; then
    echo "📡 $name"
elif [ $type == "ethernet" ]; then
    echo "$name"
else
    echo "$name"
fi
