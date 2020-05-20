# worker-thread-hash-cracker
Demo of Node.js Worker Threads through MD5 hash cracking

## Introduction

These scripts will take in a hash and compare it against hashes on numbers 0000000 - 999999999 or 1,000,000 6-digit passcodes.

## Setup

I ran this demo using Node.js 14 but _should_ work from >=12 without any code changes.

## Commands
Single threaded
npm run single-thread-crack 

## Generate MD5 Hash

MacOS: `echo -n "555555" | md5`
