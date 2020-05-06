import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Icon, Card, Col, Row, Button } from 'antd'
import ImageSlider from '../../utils/ImageSlider'
import CheckBox from './Sections/CheckBox'
import { continents } from './Sections/Datas'
const { Meta } = Card


function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit
        }

        getProducts(variables)
    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true
        }

        getProducts(variables)
        setSkip(skip)
    }



    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} > <ImageSlider images={product.images} /></a>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })

    const showFilteredResults = (filters) => {
        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters
        }

        getProducts(variables)
        setSkip(0)
    }

    const handleFilters = (filters, category) => {
        console.log(filters)
        const newFilters = { ...Filters }

        newFilters[category] = filters

        if(category === "price") {

        }

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    return (
        <div style={{ width:'75%', margin:'3rem auto' }}>
            <div style={{ textAlign:'center' }}>
                <h2>Let's Travel Anywhere <Icon type="rocket" /></h2>
            </div>

            {/* filter */}
            <CheckBox
                list={continents}
                handleFilters={filters => handleFilters(filters, "continents")}
            />

            {/* search */}

            {Products.length === 0 ?
                <div style={{ display:'flex', height:'300px', justifyContent:'center', alignItems:'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                    <Row gutter={[16,16]}>
                        {Products.map((product, index) => {})}
                        {renderCards}
                    </Row>
                </div>
            }
                <br /><br />

                {PostSize >= Limit &&
                    <div style={{ display:'flex', justifyContent:'center' }}>
                        <Button onClick={onLoadMore}>Load more</Button>
                    </div>
                }

        </div>
    )
}

export default LandingPage
