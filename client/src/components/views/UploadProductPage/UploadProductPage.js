import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon, Col, Row, Select } from 'antd';
import FileUpload from '../../utils/FileUpload'
import Axios from 'axios';

const { Option } = Select;
const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [CountryValue, setCountryValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [TodoValue, setTodoValue] = useState("")
    const [InfoValue, setInfoValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [PopularityValue, setPopularityValue] = useState(0)
    const [NightlifeValue, setNightlifeValue] = useState(0)
    const [AttractionsValue, setAttractionsValue] = useState(0)
    const [GastronomyValue, setGastronomyValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onCountryChange = (event) => {
        setCountryValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onTodoChange = (event) => {
        setTodoValue(event.currentTarget.value)
    }

    const onInfoChange = (event) => {
        setInfoValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onPopularityChange = (event) => {
        setPopularityValue(event.currentTarget.value)
    }

    const onNightlifeChange = (event) => {
        setNightlifeValue(event.currentTarget.value)
    }

    const onAttractionsChange = (event) => {
        setAttractionsValue(event.currentTarget.value)
    }

    const onGastronomyChange = (event) => {
        setGastronomyValue(event.currentTarget.value)
    }

    const onContinentsSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!TitleValue || !CountryValue || !DescriptionValue || !TodoValue || !InfoValue || !PriceValue || !PopularityValue || !NightlifeValue || !AttractionsValue || !GastronomyValue || !ContinentValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            country: CountryValue,
            description: DescriptionValue,
            todo: TodoValue,
            info: InfoValue,
            price: PriceValue,
            popularity: PopularityValue,
            nightlife: NightlifeValue,
            attractions: AttractionsValue,
            gastronomy: GastronomyValue,
            images: Images,
            continents: ContinentValue
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem', fontFamily:'Catamaran' }}>
                <Title level={2}> Upload Travel Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

            <Row gutter={16}>
                    <Col span={8}>
                        <label>City</label>
                        <Input
                        onChange={onTitleChange}
                        value={TitleValue}
                        />
                    </Col>
                    <Col span={8}>
                        <label>Country</label>
                        <Input
                        onChange={onCountryChange}
                        value={CountryValue}
                        />
                    </Col>
                    <Col span={8}>
                        <label>Continent</label>
                        <Select onChange={onContinentsSelectChange} value={ContinentValue} style={{ width: '100%' }}>
                        {Continents.map(item => (
                        <Option key={item.key} value={item.key}>{item.value}</Option>
                        ))}
                         </Select>
                    </Col>
                </Row>
                <br />
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>What to do?</label>
                <TextArea
                    onChange={onTodoChange}
                    value={TodoValue}
                />
                <br />
                <br />
                <label>Extra info</label>
                <TextArea
                    onChange={onInfoChange}
                    value={InfoValue}
                />
                <br />
                <br />
                <label>Price ($)</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br />
                <br />
                <Row gutter={16}>
                    <Col span={6}>
                        <label>Popularity ⭐️</label>
                        <Input
                            onChange={onPopularityChange}
                            value={PopularityValue}
                            type="number"
                        />
                    </Col>
                    <Col span={6}>
                        <label>Nightlife ⭐️</label>
                        <Input
                            onChange={onNightlifeChange}
                            value={NightlifeValue}
                            type="number"
                        />
                    </Col>
                    <Col span={6}>
                        <label>Attractions ⭐️</label>
                        <Input
                            onChange={onAttractionsChange}
                            value={AttractionsValue}
                            type="number"
                        />
                    </Col>
                    <Col span={6}>
                        <label>Gastronomy ⭐️</label>
                        <Input
                            onChange={onGastronomyChange}
                            value={GastronomyValue}
                            type="number"
                        />
                    </Col>
                </Row>
                <br />
                {/* DropZone */}
                <p>Upload images</p>
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />

                <Button size="large" style={{ backgroundColor:'#6420F7', color:'white', border:'none', fontWeight:'600' }} shape="round"
                    onClick={onSubmit}
                >
                    Upload Product
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
