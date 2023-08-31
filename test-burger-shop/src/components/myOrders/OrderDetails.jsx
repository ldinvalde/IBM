// Write all the code here

import React from "react";

const OrderDetails =() => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address </b>
                        {"sjda 12-32ss dsad"}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Stuart"}
                    </p>
                    <p>
                        <b>Phone</b>
                        {2131232123}
                    </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"23-02-2023"}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {"23-03-2023"}
                    </p>
                </div>
                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment method</b>
                        {"COD"}
                    </p>
                    <p>
                        <b>Payment Reference</b>
                        #{"asdasdasdasd"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"23-02-2023"}
                    </p>
                </div>
                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total</b>
                        ${2132}
                    </p>
                    <p>
                        <b>Shipping charges</b>
                        ${211}
                    </p>
                    <p>
                        <b>Tax</b>
                        ${21}
                    </p>
                    <p>
                        <b>Total Amount</b>
                        ${2132+211+21}
                    </p>
                </div>

                <article>
                    <h1>Ordered ITems</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{10}</span> x <span>{500}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Burger Fries</h4>
                        <div>
                            <span>{10}</span> x <span>{158}</span>
                        </div>
                    </div>

                    <div>
                        <h4
                            style={{
                                fontWeight:800,
                            }}
                        >
                            Sub Total
                        </h4>
                        <div
                            style={{
                                fontWeight:800, 
                            }}
                        >
                            ${2132}
                        </div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails;