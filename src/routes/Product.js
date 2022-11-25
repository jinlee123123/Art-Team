import styles from './Product.module.css'
import React, { Component,useState } from 'react';
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function Detail(){
    let product1 = [{title:'정지의 시작 2019-9', artist:'최승윤', price: 350000, size:'91x73'}]
    const [Selected, setSelected] =useState('');
    
    return( 
        <main>  
            <div className={styles.detail_box}>
                <div className={styles.detail_img}>
                    <img src='product2.jpeg' ></img>
                </div>
                <div className={styles.detail_detail}>
                    <h4>{product1[0].title} {product1[0].artist}작가</h4>
                    <h4>가격</h4>
                    <p>350,000원</p>
                    <h4>배송비</h4>
                    <p>무료 | 제주 및 도서 산간 5,000원 추가</p>
                    <h4>작품크기</h4>
                    <p>{product1[0].size} 캔버스</p>
                    <hr></hr>
                    <h4>액자선택</h4>
                    <select value={Selected}>
                        <option>액자 선택 x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+0원</option>
                        <option id='option2' value={20000}>호두나무색 원목액자 &nbsp;&nbsp;&nbsp;&nbsp; +20,000원</option>
                        <option value={25000}>매이플색 원목액자   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +25,000원</option>
                    </select>
                    <hr></hr>
                    <h4>총금액</h4>
                    <p>{product1[0].price+Selected}</p>
                    <button>구매하기</button><button>장바구니</button>
                </div>
            </div>
        </main>
            
        
        
    
        
    )}



export default Detail;