import React, { Component, useState } from 'react';
import styled from "styled-components";
import styles from "./Store.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  
  



function Store(){

    const [searchTab,setSearchTab] = useState(false);
    const searchActive = ()=>{
        setSearchTab(searchTab=>!searchTab)
    }


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
                    <div className={styles.detail_box}>
                        <div className={styles.detail_img}>
                            <img src='product2.jpeg' ></img>
                        </div>
                        <div className={styles.detail_detail}>
                            <h4>정지의 시작-2019-9 최승윤작가</h4>
                            <h5>가격</h5>
                            <p>350,000원</p>
                            <h5>배송비</h5>
                            <p>무료 | 제주 및 도서 산간 5,000원 추가</p>
                            <h5>작품크기</h5>
                            <p>91x73 캔버스</p>
                            <hr></hr>
                            <p>액자선택</p>
                            <select>
                                <option>액자 선택 x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+0원</option>
                                <option>호두나무색 원목액자 &nbsp;&nbsp;&nbsp;&nbsp; +25,000원</option>
                                <option>매이플색 원목액자   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +25,000원</option>
                            </select>
                            <hr></hr>
                            <h4>총금액</h4>
                            <button>구매하기</button><button>장바구니</button>
                        </div>
                    </div>
                    <div></div>

                    {/* <div className={styles.product_container}>
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
                     */}
            </div>
        </main>
        
        
        
        </>
    )
}

export default Store;