import { Avatar, Card, Col, Divider, Flex, Row, Space, Typography } from "antd";
import { FaRegClock } from "react-icons/fa";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import { PiSunglasses } from "react-icons/pi";

export default function GradientCard() {
  const { Text } = Typography;

  return (
    <Card
      bordered={false}
      style={{
        flex: 1,
        background: "linear-gradient(to left, #7928CA, #FF0080)",
        boxShadow: "0 4px 6px 0 rgba(0,0,0,0.2)",
        padding: "10px",
        borderRadius: "16px",
      }}
    >
      <Row
        style={{
          gap: 16,
        }}
      >
        <Col>
          <Flex gap={16}>
            <Avatar
              size={64}
              alt="Wendell Lucena"
              src="https://avatars.githubusercontent.com/u/1018931?v=4"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "white",
              }}
            />

            <Flex
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Bom dia Wendell Lucena!
              </Text>

              <Text style={{ fontSize: 16, color: "white", fontWeight: 200 }}>
                Dia da semana
              </Text>
            </Flex>
          </Flex>
        </Col>

        <Col
          xs={{ flex: "100%" }}
          sm={{ flex: "100%" }}
          md={{ flex: "40%" }}
          lg={{ flex: "20%" }}
        >
          <Flex
            gap={10}
            style={{
              flexDirection: "column",
              height: "85px",
            }}
          >
            <Flex
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "8px",
                height: "40px",
                padding: "0 8px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Flex>
                <GoArrowUpRight size={20} color="white" />
                <Text style={{ color: "white", marginLeft: 2 }}>Entrada</Text>
              </Flex>

              <Text style={{ color: "white", marginLeft: 20 }}>08:00</Text>
            </Flex>

            <Flex
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "8px",
                height: "40px",
                padding: "0 8px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Flex>
                <GoArrowUpLeft size={20} color="white" />
                <Text style={{ color: "white", marginLeft: 2 }}>Saída</Text>
              </Flex>

              <Text style={{ color: "white", marginLeft: 20 }}>--:--</Text>
            </Flex>
          </Flex>
        </Col>

        <Col
          xs={{ flex: "100%" }}
          sm={{ flex: "100%" }}
          md={{ flex: "40%" }}
          lg={{ flex: "20%" }}
        >
          <Flex
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              height: "85px",
              minWidth: "200px",
              padding: "0 8px",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PiSunglasses size={50} color="white" />

            <Flex
              style={{
                flexDirection: "column",
                marginLeft: 10,
                alignItems: "end",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: 24,
                }}
              >
                30{" "}
                {
                  <Text
                    style={{ fontWeight: 400, color: "white", fontSize: 12 }}
                  >
                    dias
                  </Text>
                }
              </Text>

              <Text style={{ color: "white", fontWeight: 200, fontSize: 14 }}>
                Férias disponíveis
              </Text>
            </Flex>
          </Flex>
        </Col>

        <Col
          xs={{ flex: "100%" }}
          sm={{ flex: "100%" }}
          md={{ flex: "40%" }}
          lg={{ flex: "20%" }}
        >
          <Flex
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              height: "85px",
              minWidth: "200px",
              padding: "0 8px",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FaRegClock size={50} color="white" />

            <Flex
              style={{
                flexDirection: "column",
                marginLeft: 10,
                alignItems: "end",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: 24,
                }}
              >
                134{" "}
                {
                  <Text
                    style={{ fontWeight: 400, color: "white", fontSize: 12 }}
                  >
                    hrs
                  </Text>
                }
              </Text>

              <Text style={{ color: "white", fontWeight: 200, fontSize: 14 }}>
                Banco de horas
              </Text>
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Card>
  );
}
