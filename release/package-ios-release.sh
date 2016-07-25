#!/usr/bin/env bash
rm -rf platforms/ios
ionic build
ionic resources
ionic prepare
open -a Xcode platforms/ios/date-pipe.xcodeproj/
