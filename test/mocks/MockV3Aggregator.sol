// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

contract MockV3Aggregator {
    int256 private _latestAnswer;
    uint8 private _decimals;

    constructor(int256 initialAnswer, uint8 decimals) {
        _latestAnswer = initialAnswer;
        _decimals = decimals;
    }

    function latestRoundData() external view returns (
        uint80,
        int256 answer,
        uint256,
        uint256,
        bytes memory
    ) {
        return (0, _latestAnswer, 0, 0, "");
    }

    function setLatestAnswer(int256 newAnswer) external {
        _latestAnswer = newAnswer;
    }

    function getDecimals() external view returns (uint8) {
        return _decimals;
    }
}