import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return(
        <>
            <div class="navigation">
            <select class="space">
                <option class="">Country</option>
                <option class="">India</option>
                <option class="">USA</option>
            </select>
            <select class="space">
                <option class="">Payment</option>
                <option class="">Google Pay</option>
                <option class="">Phone Pay</option>
                <option class="">Wallet</option>
            </select>
            <select class="space ">
                <option class="">Fashion</option>
                <option class="">Saree</option>
                <option class="">Lahenga</option>
            </select>
            <select class="space ">
                <option class="">English</option>
                <option class="">Hindi</option>
                <option class="">Marathi</option>
                <option class="">Punjabi</option>
                <option class="">Tamil</option>
            </select>
            <select class="space ">
                <option class="">Pattern</option>
                <option class="">Printed</option>
                <option class="">shadow</option>
            </select>
            <select class="space">
                <option class="">Fabric</option>
                <option class="">Cotton</option>
                <option class="">Shifon</option>
                <option class="">Crepe</option>
            </select>
            <select class="space">
              <option class="">Brands</option>
              <option class="">Lycra</option>
              <option class="">Adidas</option>
              <option class="">H & M</option>
              <option class="">Levi's</option>
          </select>
          <select class="space ">
            <option class="">Sellers</option>
            <option class="">Khushi</option>
            <option class="">SC</option>
            <option class="">KC</option>
        </select>
        </div>
        </>
    );
}


export default Navigation;