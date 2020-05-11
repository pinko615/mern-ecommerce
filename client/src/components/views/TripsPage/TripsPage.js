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
    const [Limit, setLimit] = useState(6)
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

        return <Col lg={4} md={8} xs={12}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} >
                    <ImageSlider images={product.images} /></a>}
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
        <div style={{ width:'85%', margin:'auto' }}>
            <div style={{ textAlign:'center' }}>
                <h2 style={{ fontFamily:'Catamaran', fontSize:'30px', marginBottom:'40px', marginTop:'40px' }}>
                    Discover Now, Travel Tomorrow
                </h2>
            </div>

            {/* filter */}
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                    <CheckBox
                        list={continents}
                        handleFilters={filters => handleFilters(filters, "continents")}
                    />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox
                        list={price}
                        handleFilters={filters => handleFilters(filters, "price")}
                    />
                </Col>
            </Row>



            {/* search */}
            <div style={{ display:'flex', justifyContent:'flex-end', margin:'1rem auto' }}>
                
                <SearchFeature
                    refreshFunction={updateSearchTerms}
                />

            </div>

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
                        <Button onClick={onLoadMore} style={{ backgroundColor:'#6420F7', color:'white', border:'none', fontWeight:'600' }}>Load more</Button>
                    </div>
                }

        </div>
        </div>
    )
}

export default TripsPage
