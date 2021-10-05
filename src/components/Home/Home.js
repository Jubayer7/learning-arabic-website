import React from 'react';

const Home = () => {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <img height="150" width="100" src="https://cdn.shopify.com/s/files/1/0939/6996/products/wcaa.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Let's Learn Arabic</h5>
                        <p class="card-text">Price: $300</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img height="150" width="100" src="https://www.islamicity.org/global/images/photo/IC-Articles/Learning_Arabic_calligrapIC__800x600.JPG" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Practicl Writing Tips</h5>
                        <p class="card-text">Price: $400</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img height="150" width="100" src="https://mk0kaleelao979sb1ktf.kinstacdn.com/wp-content/uploads/2019/08/arabic.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Modern Arabic Learning</h5>
                        <p class="card-text">Price: $600</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img height="150" width="100" src="https://mk0kaleelao979sb1ktf.kinstacdn.com/wp-content/uploads/2021/04/Advantages-of-Learning-Arabic-for-Business-1024x382.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Business Arabic Learning</h5>
                        <p class="card-text">Price: $600</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;