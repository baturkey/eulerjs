#!/bin/zsh
for x in *([0-9][0-9][0-9]).js; do
	eulerjs -v $x[7,9];
done
