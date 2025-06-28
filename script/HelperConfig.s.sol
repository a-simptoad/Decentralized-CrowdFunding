// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

import { Script } from "../lib/forge-std/src/Script.sol";
import { MockV3Aggregator } from "../test/mocks/MockV3Aggregator.sol";

contract HelperConfig is Script {
    NetworkConfig public activeNetworkConfig;
    MockV3Aggregator mockPriceFeed;

    struct NetworkConfig {
        address ethUsdPriceFeed;
    }

    constructor() {
        vm.startBroadcast();
        mockPriceFeed = new MockV3Aggregator(2000e18, 18);
        vm.stopBroadcast();

        activeNetworkConfig = getActiveNetworkConfig();
    }

    function sepoliaConfig() public pure returns (NetworkConfig memory) {
        return NetworkConfig({
            ethUsdPriceFeed: 0x14866185B1962B63C3Ea9E03Bc1da838bab34C19
        });
    }

    function anvilConfig() public view returns (NetworkConfig memory) {
        return NetworkConfig({
            ethUsdPriceFeed: address(mockPriceFeed)
        });
    }

    function getActiveNetworkConfig() public returns (NetworkConfig memory) {
        if (block.chainid == 11155111) {
            activeNetworkConfig = sepoliaConfig();
        } else {
            activeNetworkConfig = anvilConfig();
        }
        return activeNetworkConfig;
    }
}