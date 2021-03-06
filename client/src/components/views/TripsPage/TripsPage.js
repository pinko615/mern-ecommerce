import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Icon, Card, Col, Row, Button } from 'antd'
import ImageSlider from '../../utils/ImageSlider'
import RadioBox from './Sections/RadioBox'
import CheckBox from './Sections/CheckBox'
import { continents, price } from './Sections/Datas'
import SearchFeature from './Sections/SearchFeature'
import MainSlide from './Sections/MainSlide'
const { Meta } = Card


function TripsPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(12)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

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

        return <Col lg={6} md={6} xs={12}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} >
                    <ImageSlider images={product.horizontal} /></a>}
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

    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {
            if(data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {
        console.log(filters)
        const newFilters = { ...Filters }
        console.log(newFilters)

        newFilters[category] = filters

        if(category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }

        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerms = (newSearchTerm) => {
        
        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerms(newSearchTerm)
        getProducts(variables)

    }

    return (
        <div>
        <div className="container">
            <div className="trips">
                <h2>
                    All Destinations
                </h2>
            </div>
            <Row gutter={[16, 16]}>
                <Col lg={6}>
                    <Row>
                        {/* search feature */}
                        <div>
                            <SearchFeature refreshFunction={updateSearchTerms} />
                        </div>
                    </Row>
                    <Row className="mt">
                        {/* filter feature (checkbox) */}
                        <CheckBox
                            list={continents}
                            handleFilters={filters => handleFilters(filters, "continents")}
                        />
                    </Row>
                    <Row className="mt">
                        {/* filter feature (radiobox) */}
                        <RadioBox
                            list={price}
                            handleFilters={filters => handleFilters(filters, "price")}
                        />
                    </Row>
                </Col>
                <Col lg={18}>
                    <div>
                        <Row gutter={[24,24]}>
                            {Products.map((product, index) => {})}
                            {renderCards}
                        </Row>
                    </div>
                <br /><br />
                {PostSize >= Limit &&
                    <div className="center-button">
                        <Button size="large" shape="round" onClick={onLoadMore} className="button">Load more</Button>
                    </div>
                }
                    </Col>

                </Row>


            

            

           

        </div>
        </div>
    )
}

export default TripsPage
