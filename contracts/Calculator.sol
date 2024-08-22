// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Calculator {

    function calculateTriangleArea(uint base, uint height) public pure returns (uint) {
        return (base * height) / 2;
    }

    function calculateRectangleArea(uint width, uint height) public pure returns (uint) {
        return width * height;
    }

    function calculateSquareArea(uint side) public pure returns (uint) {
        return side * side;
    }
    
}
