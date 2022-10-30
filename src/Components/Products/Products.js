import React, { useState } from "react";
import ProductList from "../../Assets/Data/ProductList";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Modal,
  Container,
} from "@mantine/core";
import Form from "../Form/Form";
import "./Products.css";
import Footer from "../Footer/Footer";

const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const formOpener = () => {
    setShowForm(true);
  };
  const formHider = () => {
    setShowForm(false);
  };

  return (
    <div className="header" id="products">
      <Container className="container">
        Our Products
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          className="cardContainer"
        >
          {ProductList.map((val, i) => (
            <div className="card">
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <img
                    src={val.img}
                    height={300}
                    className="productImg"
                    alt="Norway"
                  />
                </Card.Section>

                <Group position="center" mt="" mb="xs">
                  <Text weight={500}>{val.productName}</Text>
                </Group>

                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord
                  landscapes with tours and activities on and around the fjords
                  of Norway
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={() => {
                    setShowForm(true);
                  }}
                >
                  Get Quote
                </Button>
              </Card>
              {/* <Card
                style={{
                  width: "18rem",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card> */}
            </div>
          ))}
        </div>
        {showForm ? (
          <Modal size="md" opened={formOpener} onClose={() => formHider()}>
            <Form hide={formHider} />
          </Modal>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default Products;
