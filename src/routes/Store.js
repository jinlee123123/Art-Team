import React, { Component,useState } from 'react';
import styled from "styled-components";
import styles from "./Store.module.css";
import { faCartPlus, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Detail from './Product.js';




function Store(){

    
    
    const [searchTab,setSearchTab] = useState(false);
    const searchActive = ()=>{
        setSearchTab(searchTab=>!searchTab)
    };
    


    return(
        <>
        <main>
            <div className={styles.store_main}>
            <div className={styles.left_menu}>
                
                <div className={styles.search} onClick={()=>{searchActive()}}><h4>Search <FontAwesomeIcon icon={faMagnifyingGlass}/></h4></div> <div className={searchTab === false ? 'hidden': ''}><FontAwesomeIcon icon={faMagnifyingGlass}/><input></input></div>
                <div><h4>Open Editions</h4>
                    <ul>
                        <li>Soft & Pastelized</li>
                        <li>Modern & Minimal</li>
                        <li>Bright & Colorful</li>
                        <li>Vintage & Tender</li>
                        <li>Cool & Energetic</li>
                    </ul>
                </div>
                <div><h4>Collectors</h4>
                    <ul>
                        <li>Cozy & Warm</li>
                        <li>Morder & Minimal</li>
                        <li>Vintage & Classic</li>
                    </ul>
                </div>
                <div><h4>Contact</h4>
                    <ul>
                        <li>Q&A</li>
                    </ul>
                </div>


            </div>
                <Product></Product>
                
            
            </div>
        </main>
        
        
        
        </>
    )
}

function Product(){

    let navigate = useNavigate();

    return(
        <>
        <div className={styles.product_container}>
                        <div className={styles.product_category}>
                            <p>Open Editions</p>
                            <h1>Soft & Pastelized</h1>
                            <hr></hr>
                            <p>포근하고 화사한 톤의 작품들로 공간에 휴식과 여유를 선물하는 작품들</p>
                            <hr></hr>
                        </div>
                        <div className={styles.sort}>
                            <div className={styles.sort_views}>조회순</div>&nbsp;|&nbsp;<div className={styles.sort_cost}>가격순</div>&nbsp;정렬
                        </div>
                        <div className={styles.product_grid}>
                        <div className={styles.product} onClick={()=>{navigate('/detail')}}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn} onClick={()=>{navigate()}}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>                       
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>           
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>          
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>           
                        <div className={styles.product}>
                            <img src='product1.png'></img>
                            <div className={styles.product_detail}>
                                <h4>The Ultimate Canvas Creator</h4>
                                <p>상품가격</p>
                                <div className={styles.cart_btn}><FontAwesomeIcon icon={faCartPlus}/>&nbsp;&nbsp;장바구니에 담기</div>
                            </div>
                        </div>
                        </div>
                        <div className={styles.pages}>
                            &lt;&nbsp;1&nbsp;2&nbsp;3&nbsp;&gt;
                        </div>                                                                                   
                    </div>
        </>
    )

}


export default Store;