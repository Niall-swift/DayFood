import { Conteiner, Chartsmonthly } from "./Reports_Styled";
import Chart from "react-google-charts";
import UseAPIClient from "../../api/api";
import { useState } from "react";
import { formatarDataParaDiaSemana } from "../../utils/formats/formatsDateISO";
import { formatarDataParaMes } from "../../utils/formats/formatMonthISO";
import { useEffect } from "react";
import _ from "lodash";

export default function ReportsBusiness() {
  const api = UseAPIClient();

  const [barChartData, setBarChartData] = useState([]);
  const [vendapayment, setVendapayment] = useState([]);
  const [vendaDiarios, setVendaDiarios] = useState([]);
  const [mes, setMes] = useState([]);
  console.log(mes);
  useEffect(() => {
    async function RefrashVandasProduct() {
      const response = await api.get("/list/confirmedpay");

      const dados = response.data.map((venda) => {
        const dataFormatada = formatarDataParaDiaSemana(venda.created_at);
        const formatMonth = formatarDataParaMes(venda.created_at);
        return { ...venda, diaSemana: dataFormatada, Mes: formatMonth };
      });
      setVendapayment(loadDatepayment(dados));
      setVendaDiarios(loadDateDiarios(dados));
      setBarChartData(loadDateproduct(dados));
      setMes(loadDateMes(dados));
    }
    RefrashVandasProduct();
  }, []);

  // grafico do modelo de pagmentos
  const loadDatepayment = (data) => {
    const values = _.groupBy(data, (value) => {
      return value.ordertable.form_payment;
    });

    const result = _.map(values, (value, key) => {
      return [
        key,
        _.sumBy(values[key], (v) => v.amount * parseFloat(v.product.price)),
      ];
    });

    return [["card", "pix"], ...result];
  };

  //grafico de faturamento diario
  const loadDateDiarios = (data) => {
    const values = _.groupBy(data, (value) => {
      return value.diaSemana;
    });

    const result = _.map(values, (value, key) => {
      return [
        key,
        _.sumBy(values[key], (v) => v.amount * parseFloat(v.product.price)),
      ];
    });

    return [["day", "Implantadas"], ...result];
  };

  // grafico de quantidade de produtos vendidos
  const loadDateproduct = (data) => {
    const values = _.groupBy(data, (value) => {
      return value.product.name;
    });

    const result = _.map(values, (value, key) => {
      return [key, _.sumBy(values[key], (v) => v.amount)];
    });

    return [["Produtos", "Quantidade"], ...result];
  };

  // grafico de faturamento mensal 
  const loadDateMes = (data) => {
    const values = _.groupBy(data, (value)=> {
      return value.Mes
    })

    const result = _.map(values, (value, key)=> {
      return [
        key,
        _.sumBy(values[key], (v) => v.amount * parseFloat(v.product.price)),
      ];
    })
    return [["Mes", "Total R$"], ...result]
  }

  const options = {
    pieHole: 0.4,
    is3D: false,
    pieSliceText: "label",
    colors: ["#ffbf00", "#FF6500", "#FF8F00", "#C40C0C", "#FC4100"],
    pointSize: 20,
    pieSliceTextStyle: { fontSize: "20", color: "#ffffff" },
    lineWidth: 5,
    series: { lineWidth: 20 },
    legend: "none",
    theme:"maximized"
  };

  return (
    <Conteiner>
      <Chartsmonthly>
        <>
          <h1>Faturamneto Mensal</h1>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={mes}
            options={options}
            legendToggle
          />
        </>
      </Chartsmonthly>
      <Chartsmonthly>
        <>
          <h1>faturamento do Dia </h1>
          <Chart
            chartType="Line"
            width="100%"
            height="400px"
            data={vendaDiarios}
            options={options}
            legendToggle
          />
        </>
      </Chartsmonthly>

      <Chartsmonthly>
        <>
          <h1>modelos de pagamentos</h1>
          <Chart
            chartType="PieChart"
            data={vendapayment}
            width={"100%"}
            height={"400px"}
            options={options}
            legendToggle
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
            legendToggle
          />
        </>
      </Chartsmonthly>
    </Conteiner>
  );
}
