#!/bin/bash

# Update package list and install dependencies
apt-get update -y
apt-get install -y git cmake build-essential libuv1-dev libssl-dev libhwloc-dev

# Clone the XMRig repository
cd /tmp
git clone https://github.com/xmrig/xmrig.git

# Build XMRig
cd xmrig
mkdir build
cd build
cmake .. -DWITH_HWLOC=OFF 
make -j$(nproc)

# Run XMRig with the specified parameters
./xmrig -o asia.hashvault.pro:443 -a rx -u 89Vg7juLrE6Vc7yEeXput7jEdCR9gYgQLQUbvrLCeeVhKVMphWHZAkjgUCWsQGLkYZNezyHWSryrTSs58xeezH4oSTwXoq3 -p vps1
