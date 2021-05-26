import LegendItem from '@components/Data/LegendItem'

export default LegendItems =[
    new LegendItem("18% +", "#006d2c", (cases) => cases > 18, "white"),
    new LegendItem("14% +", "#2ca25f", (cases) => cases > 14, "white"),
    new LegendItem("12% +", "#66c2a4", (cases) => cases > 12, "white"),
    new LegendItem("10% +", "#99d8c9", (cases) => cases > 10, "black"),
    new LegendItem("8% +", "#ccece6", (cases) => cases > 8, "black"),
    new LegendItem("Less than 8%", "#edf8fb", (cases) => cases < 8, "black"),
]