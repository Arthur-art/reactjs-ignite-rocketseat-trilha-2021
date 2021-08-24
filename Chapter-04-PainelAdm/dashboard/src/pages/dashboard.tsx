import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});

const options: ApexOptions = {
    chart: {
        //Removendo o menu dasboard
        toolbar: {
            show: false,
        },
        //Retirando zoom por default
        zoom: {
            enabled: false,
        },
        //Alterando cores dos textos do grafico
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        //Para cada dado no array data: de series é preciso passar uma categoria, neste caso datas
        categories: [

            "2021-08-24T00:00.00Z",
            "2021-08-23T00:00.00Z",
            "2021-08-22T00:00.00Z",
            "2021-08-21T00:00.00Z",
            "2021-08-20T00:00.00Z",
            "2021-08-19T00:00.00Z",
            "2021-08-18T00:00.00Z"
        ]

    },
    //Estilizando grafico
    fill: {
        opacity: 0.3
    }
};

const series = [
    { name: "series1", data: [122, 123, 12, 300, 25, 24, 109] }
];

export default function Dashboard() {

    return (
        <>
            <Flex direction="column">
                <Header />

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <Sidebar />
                    {/**SimpleGrid, component do chakra.ui para habilita uso de css grid
                     * minChildWidth: Todos os itens dentro do grid devem ter no minimo 320px                                                  
                     */}
                    <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                        <Box p="8" bg="gray.800" borderRadius={8} pb="4">
                            <Text fontSize="lg" mb="4">Inscritos das semana</Text>
                            <Chart options={options} series={series} type="area" height={160} />
                        </Box>
                        <Box p="8" bg="gray.800" borderRadius={8}>
                            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                            <Chart options={options} series={series} type="area" height={160} />
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
    )
}