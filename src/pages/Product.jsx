import { Link } from "react-router-dom";
import {
	Container,
	Title,
	Wrapper,
	SButton as Button,
	Left,
	Right,
    InfoContainer,
    Image,
    InfoItem,
    ProductKey,
    ProductValue,
    Bottom,
    Form,
    FormLeft,
    FormRight,
    PublishIcon,
    Label,
    Input,
    Options,
    Option,
    UploadCont,
} from "../styles/product.sc";
import Chart from "../components/Chart";
import { productData } from "../dummyData"
import Prod from "../data/product4.jpg"

const Product = () => {
	return (
		<Container>
			<Wrapper>
				<Title
					variant="h6"
					component="h1"
				>
					Product
				</Title>
				<Link to="../new">
					<Button>Create</Button>
				</Link>
			</Wrapper>

			<Wrapper className="top">
				<Left>
                    <Chart data={productData} dataKey="Sales" title="Sales performance" />
                </Left>
				<Right elevation={2}>
                    <InfoContainer className="top">
                        <Image src={Prod} alt="" />
                        <Title variant="subtitle1" component="span" className="name">Nike Shoe</Title>
                    </InfoContainer>
                    <InfoContainer className="bottom">
                        <InfoItem>
                            <ProductKey component="span">id:</ProductKey>
                            <ProductValue component="span">123</ProductValue>
                        </InfoItem>
                        <InfoItem>
                            <ProductKey component="span">sales:</ProductKey>
                            <ProductValue component="span">123</ProductValue>
                        </InfoItem>
                        <InfoItem>
                            <ProductKey component="span">active:</ProductKey>
                            <ProductValue component="span">yes</ProductValue>
                        </InfoItem>
                        <InfoItem>
                            <ProductKey component="span">in stock:</ProductKey>
                            <ProductValue component="span">no</ProductValue>
                        </InfoItem>
                    </InfoContainer>
                </Right>
			</Wrapper>

			<Bottom elevation={2}>
                <Form>
                    <FormLeft>
                        <Label>Product Name</Label>
                        <Input type="text" placeholder="Nike Shoe" />

                        <Label>In Stock</Label>
                        <Options name="in-stock" id="in-stock">
                            <Option value="yes">Yes</Option>
                            <Option value="no">No</Option>
                        </Options>

                        <Label>Active</Label>
                        <Options name="active" id="active">
                            <Option value="yes">Yes</Option>
                            <Option value="no">No</Option>
                        </Options>
                    </FormLeft>
                    <FormRight>
                        <UploadCont>
                            <Image src={Prod} alt="" className="upload" />
                            <Label htmlFor="file"><PublishIcon /></Label>
                            <Input type="text" id="file" className="hidden" />
                        </UploadCont>
                        <Button className="update">Update</Button>
                    </FormRight>
                </Form>
            </Bottom>
		</Container>
	);
};

export default Product;
