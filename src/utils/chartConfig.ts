import { CHART_COLORS } from "./colors";

export const chartConfig={

line:{

stroke:
CHART_COLORS[0],

strokeWidth:3

},

bar:{

fill:
CHART_COLORS[0]

},

pie:CHART_COLORS,

radar:{

fill:
CHART_COLORS[1],

opacity:0.7

},

grid:{

strokeDasharray:"3 3"

}

};

export default chartConfig;