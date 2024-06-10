import { Conteiner, Chartsmonthly } from "./Reports_Styled";
import Chart from "react-google-charts";
import UseAPIClient from "../../api/api";
import { useState } from "react";
import { formatarDataParaDiaSemana } from "../../utils/formats/formatsDateIso";
import { useEffect } from "react";
import _ from "lodash";

export default function ReportsBusiness() {
  const api = UseAPIClient();

  const [barChartData, setBarChartData] = useState([]);
  const [vendadia, setVendadia] = useState([]);
  const [vendasemanal, setVendasemanal] = useState([]);

  useEffect(() => {
    async function RefrashVandasProduct() {
      const response = await api.get('/list/confirmedpay')

      const dados = response.data.map(venda => {
        const dataFormatada = formatarDataParaDiaSemana(venda.data_pedido);
        return { ...venda, diaSemana: dataFormatada };
      })
      setVendadia(loadDateday(dados))
      setVendasemanal(loadDatesemanal(dados))
      setBarChartData(loadDateproduct(dados))
      console.log(dados)
    }
    RefrashVandasProduct()
  }, [])

  const loadDateday = (data) => {

    const values = _.groupBy(data, (value) => {
      return value.payment;
    });

    const result = _.map(values, (value, key) => {
      return [
        key,
        _.sumBy(values[key], (v) => parseFloat(v.total_amount))
      ]
    })

    return ([["card", "pix"], ...result])
  }

  const loadDatesemanal = (data) => {

    const values = _.groupBy(data, (value) => {
      return value.diaSemana;
    });

    const result = _.map(values, (value, key) => {
      return [
        key,
        _.sumBy(values[key], (v) => parseFloat(v.total_amount))
      ]
    })

    return ([["product", "total"], ...result])
  }

  const loadDateproduct = (data) => {

    const values = _.groupBy(data, (value) => {
      return value.name_product;
    });

    const result = _.map(values, (value, key) => {
      return [
        key,
        _.sumBy(values[key], (v) => v.amount)
      ]
    })

    return ([["product", "Quantidade"], ...result])
  }


  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];


  const options = {
    pieHole: 0.3,
    is3D: false,
    colors: ["#ffbf00", "#FF6500", "#FF8F00", "#C40C0C", "#FC4100"],
    pointSize: 20,
    pieSliceTextStyle:{fontSize: "15", color: "#ffffff"},
    lineWidth: 2,
    series:{lineWidth: 8},
};


return (
  <Conteiner>
    <Chartsmonthly>
      <>
        <h1>faturamento semanal</h1>
        <Chart
          chartType="Line"
          width="100%"
          height="400px"
          data={vendasemanal}
          options={options}
        />
      </>
    </Chartsmonthly>

    <Chartsmonthly>
      <>
        <h1>modelos de pagamentos</h1>
        <Chart
          chartType="PieChart"
          data={vendadia}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </>
    </Chartsmonthly>

    <Chartsmonthly>
      <>
        <h1>produtos mais vendidos</h1>
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={barChartData}
          options={options}
        />

      </>
    </Chartsmonthly>
  </Conteiner>
)
}
