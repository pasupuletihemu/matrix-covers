import "./App.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
const Homeitems = [
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230624/X8vA/64970d4deebac147fc066330/-473Wx593H-465538458-white-MODEL.jpg",
    Name: "LA VERNE",
    Bio: "Set of 2 Rectangular Quilted Pillows",
    Price: "₹540",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230526/uVZQ/6470a5f0d55b7d0c63168c35/-473Wx593H-4933691070-multi-MODEL.jpg",
    Name: "PORTICO",
    Bio: "140 TC King Size Fitted Sheet with 2 Pillow Covers",
    Price: "MRP ₹1,299",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20210920/l8TO/61485fe37cdb8cb8242b6842/-473Wx593H-462921810-blue-MODEL.jpg",
    Name: "JAIPUR FABRIC",
    Bio: "240 TC Printed Double Bedsheet with Pillow Covers",
    Price: "₹680",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230526/Mc8V/64709c4842f9e729d7eb3a41/-473Wx593H-4933691000-multi-MODEL.jpg",
    Name: "PORTICO",
    Bio: "140 TC King Size Fitted Sheet with 2 Pillow Covers",
    Price: "₹1,299",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20220520/GGsL/6286da98f997dd03e2f7bfda/-473Wx593H-4928593030-multi-MODEL.jpg",
    Name: "PORTICO",
    Bio: "Striped King Size Bedsheet with 2 Pillow Covers",
    Price: "₹934",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230517/twvV/646501ec42f9e729d7924af3/-473Wx593H-466162916-brown-MODEL2.jpg",
    Name: "CG HOMES",
    Bio: "180 TC Geometric Print Double Bedsheet with Pillow Covers",
    Price: "₹439 MRP ₹1,999 (78% OFF)",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230607/JYgr/64805a3cd55b7d0c63545b63/-473Wx593H-466246672-brown-MODEL.jpg",
    Name: "HOMESAKE",
    Bio: "Metal Floor Lightning Lamp with Shade",
    Price: "₹855 MRP ₹4,500 (81% OFF)",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230627/ib5C/649ad230eebac147fc0c40af/-473Wx593H-4934409930-multi-MODEL2.jpg",
    Name: "HOME EXPRESSIONS USA",
    Bio: "85 GSM Floral Print Double Bedsheet with Pillow",
    Price: "₹500 MRP ₹999 (50% OFF)",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20220303/5diA/6220dd28f997dd03e2ffce0d/-473Wx593H-4927837040-multi-MODEL.jpg",
    Name: "PORTICO",
    Bio: "Floral Print King Size Bedsheet with 2 Pillow Covers",
    Price: "₹1,099 MRP ₹1,999 (45% OFF)",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230519/PsgN/64667d3242f9e729d7998381/-473Wx593H-466166668-beige-MODEL.jpg",
    Name: "CG HOMES",
    Bio: "180 TC Leaf Printed Double Size Bedsheet with Pillow Covers",
    Price: "₹430  MRP ₹1,999 (78% OFF)",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230721/zSTT/64ba149aa9b42d15c9670b8a/-473Wx593H-466133119-blue-MODEL.jpg",
    Name: "URBAN MAGIC",
    Bio: "104 TC Floral Print Double Size Bedsheet with Pillow Cover",
    Price: "₹455 MRP ₹1,299 (65% OFF)",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230629/NAQi/649d7dfbeebac147fc40b082/-473Wx593H-4934410530-multi-MODEL.jpg",
    Name: "HOME EXPRESSIONS USA",
    Bio: "Printed Double-Size Bedsheet with Pillow Covers",
    Price: "₹650  MRP ₹1,299 (50% OFF)",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230624/b1Nt/6496b5feeebac147fcfbf044/-473Wx593H-465579816-multi-MODEL.jpg",
    Name: "LA VERNE",
    Bio: "120 TC Floral Print King-Size Bedsheet with Pillow Covers",
    Price: "₹510 MRP ₹2,999 (83% OFF)",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20230606/uag2/647f2475d55b7d0c6351823a/-473Wx593H-4933694790-multi-MODEL.jpg",
    Name: "PORTICO",
    Bio: "164 TC Super King-Size Bedsheet with Pillow Covers",
    Price: "MRP₹3,999",
  },
  {
    Imagelink:
      "https://assets.ajio.com/medias/sys_master/root/20220408/xX7N/62502727aeb26921af135bdc/-473Wx593H-463010916-multi-MODEL.jpg",
    Name: "COUNTRY HOME",
    Bio: "Striped Double Bedsheet with Pillow Covers",
    Price: "₹630 MRP ₹2,100 (70% OFF)",
  },
];

function App() {
  return (
    <div>
      <Container>
        <Row>
          {Homeitems.map((bedcovers) => {
            return (
              <Col className="col-4">
                <Card
                  className="my-3 mx-4"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt={bedcovers.Imagelink} src={bedcovers.Imagelink} />
                  <CardBody>
                    <CardTitle tag="h5">{bedcovers.Name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {bedcovers.Bio}
                    </CardSubtitle>
                    <CardText>{bedcovers.Price}</CardText>
                  </CardBody>

                  <Button color="success">ADD 2 BAG</Button>
                  <p style={{ textAlign: "center" }}>if you LiKe Product</p>
                  <Button color="danger">SAVE 2 WISHLIST</Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
