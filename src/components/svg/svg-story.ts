import { html } from 'lit-html';
import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import '../shadow-wrapper/shadow-wrapper';
import './svg';

// See https://twitter.com/Rich_Harris/status/1198339672361119745

storiesOf('SVG', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => html`
      <section class="pf-c-page__main-section" style="padding: 20px">
        <h1 class="pf-c-title pf-m-3xl">PF icon</h1>
        <br />
        <pf-shadow-wrapper>
          <svg
            style="vertical-align: -0.375em;"
            fill="currentColor"
            height="3em"
            width="3em"
            viewBox="0 0 448 512"
            aria-labelledby="icon-title-26"
            role="img"
          >
            <title id="icon-title-26">AccessibleIconIcon</title>
            <path
              d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"
              transform=""
            ></path>
          </svg>
        </pf-shadow-wrapper>
        <br />
        <h1 class="pf-c-title pf-m-3xl">Area chart</h1>
        <br />
        <div style="height: 200px; width: 800px;">
          <div
            style="height: 100%; width: 100%; user-select: none; pointer-events: none; touch-action: none; position: relative;"
            class="pf-c-chart"
          >
            <svg
              width="800"
              height="200"
              role="img"
              aria-labelledby="victory-container-1-title"
              aria-describedby="victory-container-1-desc"
              viewBox="0 0 800 200"
              style="pointer-events: all; width: 100%; height: auto;"
            >
              <title id="victory-container-1-title">Area chart example</title>
              <desc id="victory-container-1-desc">Average number of pets</desc>
              <g role="presentation">
                <line
                  vector-effect="non-scaling-stroke"
                  style="stroke: rgb(210, 210, 210); fill: transparent; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round;"
                  role="presentation"
                  shape-rendering="auto"
                  x1="50"
                  x2="600"
                  y1="150"
                  y2="150"
                ></line>
                <g role="presentation">
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1px;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="50"
                    x2="50"
                    y1="150"
                    y2="155"
                  ></line>
                  <text direction="inherit" dx="0" dy="11.969999999999999" x="50" y="165" id="chart-axis-0-tickLabels-0">
                    <tspan
                      x="50"
                      dx="0"
                      text-anchor="middle"
                      style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(79, 82, 85);"
                    >
                      2015
                    </tspan>
                  </text>
                </g>
                <g role="presentation">
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1px;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="187.5"
                    x2="187.5"
                    y1="150"
                    y2="155"
                  ></line>
                  <text direction="inherit" dx="0" dy="11.969999999999999" x="187.5" y="165" id="chart-axis-0-tickLabels-1">
                    <tspan
                      x="187.5"
                      dx="0"
                      text-anchor="middle"
                      style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(79, 82, 85);"
                    >
                      2016
                    </tspan>
                  </text>
                </g>
                <g role="presentation">
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1px;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="325"
                    x2="325"
                    y1="150"
                    y2="155"
                  ></line>
                  <text direction="inherit" dx="0" dy="11.969999999999999" x="325" y="165" id="chart-axis-0-tickLabels-2">
                    <tspan
                      x="325"
                      dx="0"
                      text-anchor="middle"
                      style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(79, 82, 85);"
                    >
                      2017
                    </tspan>
                  </text>
                </g>
                <g role="presentation">
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1px;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="462.5"
                    x2="462.5"
                    y1="150"
                    y2="155"
                  ></line>
                  <text direction="inherit" dx="0" dy="11.969999999999999" x="462.5" y="165" id="chart-axis-0-tickLabels-3">
                    <tspan
                      x="462.5"
                      dx="0"
                      text-anchor="middle"
                      style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(79, 82, 85);"
                    >
                      2018
                    </tspan>
                  </text>
                </g>
                <g role="presentation">
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1px;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="600"
                    x2="600"
                    y1="150"
                    y2="155"
                  ></line>
                  <text direction="inherit" dx="0" dy="11.969999999999999" x="600" y="165" id="chart-axis-0-tickLabels-4">
                    <tspan
                      x="600"
                      dx="0"
                      text-anchor="middle"
                      style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(79, 82, 85);"
                    >
                      2019
                    </tspan>
                  </text>
                </g>
              </g>
              <g role="presentation">
                <line
                  vector-effect="non-scaling-stroke"
                  style="stroke: rgb(210, 210, 210); fill: transparent; stroke-width: 1px; stroke-linecap: round; stroke-linejoin: round;"
                  role="presentation"
                  shape-rendering="auto"
                  x1="50"
                  x2="50"
                  y1="50"
                  y2="150"
                ></line>
                <g role="presentation">
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: none; pointer-events: painted; stroke-linecap: round; stroke-linejoin: round;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="50"
                    x2="600"
                    y1="127.77777777777777"
                    y2="127.77777777777777"
                  ></line>
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1px;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="50"
                    x2="45"
                    y1="127.77777777777777"
                    y2="127.77777777777777"
                  ></line>
                  <text direction="inherit" dx="0" dy="4.97" x="35" y="127.77777777777777" id="chart-axis-1-tickLabels-0">
                    <tspan
                      x="35"
                      dx="0"
                      text-anchor="end"
                      style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(79, 82, 85);"
                    >
                      2
                    </tspan>
                  </text>
                </g>
                <g role="presentation">
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: none; pointer-events: painted; stroke-linecap: round; stroke-linejoin: round;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="50"
                    x2="600"
                    y1="105.55555555555556"
                    y2="105.55555555555556"
                  ></line>
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1px;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="50"
                    x2="45"
                    y1="105.55555555555556"
                    y2="105.55555555555556"
                  ></line>
                  <text direction="inherit" dx="0" dy="4.97" x="35" y="105.55555555555556" id="chart-axis-1-tickLabels-1">
                    <tspan
                      x="35"
                      dx="0"
                      text-anchor="end"
                      style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(79, 82, 85);"
                    >
                      4
                    </tspan>
                  </text>
                </g>
                <g role="presentation">
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: none; pointer-events: painted; stroke-linecap: round; stroke-linejoin: round;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="50"
                    x2="600"
                    y1="83.33333333333334"
                    y2="83.33333333333334"
                  ></line>
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1px;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="50"
                    x2="45"
                    y1="83.33333333333334"
                    y2="83.33333333333334"
                  ></line>
                  <text direction="inherit" dx="0" dy="4.97" x="35" y="83.33333333333334" id="chart-axis-1-tickLabels-2">
                    <tspan
                      x="35"
                      dx="0"
                      text-anchor="end"
                      style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(79, 82, 85);"
                    >
                      6
                    </tspan>
                  </text>
                </g>
                <g role="presentation">
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: none; pointer-events: painted; stroke-linecap: round; stroke-linejoin: round;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="50"
                    x2="600"
                    y1="61.111111111111114"
                    y2="61.111111111111114"
                  ></line>
                  <line
                    vector-effect="non-scaling-stroke"
                    style="stroke: rgb(210, 210, 210); fill: transparent; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1px;"
                    role="presentation"
                    shape-rendering="auto"
                    x1="50"
                    x2="45"
                    y1="61.111111111111114"
                    y2="61.111111111111114"
                  ></line>
                  <text direction="inherit" dx="0" dy="4.97" x="35" y="61.111111111111114" id="chart-axis-1-tickLabels-3">
                    <tspan
                      x="35"
                      dx="0"
                      text-anchor="end"
                      style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(79, 82, 85);"
                    >
                      8
                    </tspan>
                  </text>
                </g>
              </g>
              <g>
                <g style="height: 100%; width: 100%; user-select: none;" clip-path="url(#victory-clip-2)">
                  <defs>
                    <clipPath id="victory-clip-2">
                      <rect vector-effect="non-scaling-stroke" x="50" y="50" width="550" height="100"></rect>
                    </clipPath>
                  </defs>
                  <path
                    style="fill: rgb(0, 102, 204); width: 20px; fill-opacity: 0.3; stroke-width: 2px; stroke: rgb(0, 102, 204);"
                    d="M50,116.66666666666667C95.83333333333334,114.81481481481482,141.66666666666666,112.96296296296296,187.5,105.55555555555556C233.33333333333334,98.14814814814815,279.1666666666667,61.111111111111114,325,61.111111111111114C370.8333333333333,61.111111111111114,416.6666666666667,72.22222222222223,462.5,83.33333333333334L462.5,150C416.6666666666667,150,370.8333333333333,150,325,150C279.1666666666667,150,233.33333333333334,150,187.5,150C141.66666666666666,150,95.83333333333334,150,50,150Z"
                    role="presentation"
                    shape-rendering="auto"
                  ></path>
                </g>
                <g style="height: 100%; width: 100%; user-select: none;" clip-path="url(#victory-clip-3)">
                  <defs>
                    <clipPath id="victory-clip-3">
                      <rect vector-effect="non-scaling-stroke" x="50" y="50" width="550" height="100"></rect>
                    </clipPath>
                  </defs>
                  <path
                    style="fill: rgb(139, 193, 247); width: 20px; fill-opacity: 0.3; stroke-width: 2px; stroke: rgb(139, 193, 247);"
                    d="M50,127.77777777777777C95.83333333333334,124.07407407407408,141.66666666666666,120.37037037037038,187.5,116.66666666666667C233.33333333333334,112.96296296296296,279.1666666666667,109.25925925925927,325,105.55555555555556C370.8333333333333,101.85185185185185,416.6666666666667,98.14814814814815,462.5,94.44444444444444C508.3333333333333,90.74074074074073,554.1666666666666,87.03703703703704,600,83.33333333333334L600,150C554.1666666666666,150,508.3333333333333,150,462.5,150C416.6666666666667,150,370.8333333333333,150,325,150C279.1666666666667,150,233.33333333333334,150,187.5,150C141.66666666666666,150,95.83333333333334,150,50,150Z"
                    role="presentation"
                    shape-rendering="auto"
                  ></path>
                </g>
                <g style="height: 100%; width: 100%; user-select: none;" clip-path="url(#victory-clip-4)">
                  <defs>
                    <clipPath id="victory-clip-4">
                      <rect vector-effect="non-scaling-stroke" x="50" y="50" width="550" height="100"></rect>
                    </clipPath>
                  </defs>
                  <path
                    style="fill: rgb(0, 47, 93); width: 20px; fill-opacity: 0.3; stroke-width: 2px; stroke: rgb(0, 47, 93);"
                    d="M50,138.88888888888889C95.83333333333334,135.1851851851852,141.66666666666666,131.48148148148147,187.5,127.77777777777777C233.33333333333334,124.07407407407408,279.1666666666667,116.66666666666667,325,116.66666666666667C370.8333333333333,116.66666666666667,416.6666666666667,127.77777777777777,462.5,127.77777777777777C508.3333333333333,127.77777777777777,554.1666666666666,116.66666666666667,600,105.55555555555556L600,150C554.1666666666666,150,508.3333333333333,150,462.5,150C416.6666666666667,150,370.8333333333333,150,325,150C279.1666666666667,150,233.33333333333334,150,187.5,150C141.66666666666666,150,95.83333333333334,150,50,150Z"
                    role="presentation"
                    shape-rendering="auto"
                  ></path>
                </g>
              </g>
              <g>
                <rect
                  vector-effect="non-scaling-stroke"
                  style="fill: none;"
                  role="presentation"
                  shape-rendering="auto"
                  x="616"
                  y="55.642500000000005"
                  width="79.96908881199539"
                  height="92.71499999999999"
                ></rect>
                <path
                  d="M 625.128, 74.51450000000001
      h9.743999999999915
      v-9.743999999999915
      h-9.743999999999915
      z"
                  role="presentation"
                  shape-rendering="auto"
                  style="fill: rgb(0, 102, 204);"
                ></path>
                <path
                  d="M 625.128, 105.41950000000001
      h9.743999999999915
      v-9.743999999999915
      h-9.743999999999915
      z"
                  role="presentation"
                  shape-rendering="auto"
                  style="fill: rgb(139, 193, 247);"
                ></path>
                <path
                  d="M 625.128, 136.3245
      h9.743999999999915
      v-9.743999999999915
      h-9.743999999999915
      z"
                  role="presentation"
                  shape-rendering="auto"
                  style="fill: rgb(0, 47, 93);"
                ></path>
                <text direction="inherit" dx="0" dy="4.97" x="646.8" y="69.64250000000001" id="chart-legend-3-labels-0">
                  <tspan
                    x="646.8"
                    dx="0"
                    text-anchor="start"
                    style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(37, 37, 37);"
                  >
                    Cats
                  </tspan>
                </text>
                <text direction="inherit" dx="0" dy="4.97" x="646.8" y="100.54750000000001" id="chart-legend-3-labels-1">
                  <tspan
                    x="646.8"
                    dx="0"
                    text-anchor="start"
                    style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(37, 37, 37);"
                  >
                    Dogs
                  </tspan>
                </text>
                <text direction="inherit" dx="0" dy="4.97" x="646.8" y="131.45250000000001" id="chart-legend-3-labels-2">
                  <tspan
                    x="646.8"
                    dx="0"
                    text-anchor="start"
                    style="font-family:var(--pf-chart-global--FontFamily); font-size: 14px; letter-spacing:var(--pf-chart-global--letter-spacing); padding: 10px; stroke: transparent; fill: rgb(37, 37, 37);"
                  >
                    Birds
                  </tspan>
                </text>
              </g>
            </svg>
            <div style="z-index: 99; position: absolute; top: 0px; left: 0px; width: 100%; height: auto;">
              <svg width="800" height="200" viewBox="0 0 800 200" style="overflow: visible; width: 100%; height: auto;"></svg>
            </div>
          </div>
        </div>
      </section>
    `
  );
