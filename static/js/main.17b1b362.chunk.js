(this["webpackJsonprange-slider"]=this["webpackJsonprange-slider"]||[]).push([[0],{20:function(t,e,r){},21:function(t,e,r){},26:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r(0),l=r.n(n),u=r(3),o=r.n(u),R=(r(20),r(4)),y=r(5),s=r(7),c=r(6),i=(r(21),r(8)),d=(n.Component,function(t){Object(s.a)(r,t);var e=Object(c.a)(r);function r(t){var a;return Object(R.a)(this,r),(a=e.call(this,t)).cumulativeTotal=0,a.state={},a}return Object(y.a)(r,[{key:"render",value:function(){var t=this;return this.cumulativeTotal=0,Object(a.jsxs)("div",{id:"product-list",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"S&P 500 Total Returns by Year"}),Object(a.jsxs)("h3",{children:["Currently Displaying ",this.props.selectedRange[0]," Through ",this.props.selectedRange[1]]})]}),Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Year"}),Object(a.jsx)("th",{children:"Total Return"}),Object(a.jsx)("th",{children:"Cumulative Return"})]})}),Object(a.jsx)("tbody",{children:this.props.marketReturns.map((function(e,r,n){return t.cumulativeTotal+=parseFloat(e.totalReturn),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.year}),Object(a.jsx)("td",{children:e.totalReturn}),Object(a.jsx)("td",{children:t.cumulativeTotal})]},t.props.index)}))})]})]})}}]),r}(n.Component)),h=r(14),j=(r(25),function(t){Object(s.a)(r,t);var e=Object(c.a)(r);function r(t){var a;return Object(R.a)(this,r),(a=e.call(this,t)).setRange=function(){var t,e;a.state.marketReturns.map((function(r){t||(t=r.year),e||(e=r.year),r.year<t&&(t=r.year),r.year>e&&(e=r.year)})),a.setState({min:t,max:e,selectedRange:[t,e]})},a.filterReturns=function(){var t=a.state,e=t.selectedRange,r=t.marketReturns.filter((function(t){return t.year>=e[0]&&t.year<=e[1]}));a.setState({displayedMarketReturns:r}),console.log("first results: ",a.state.displayedMarketReturns)},a.handleRangeChange=function(t){a.setState({selectedRange:t}),a.filterReturns()},a.state={marketReturns:i,displayedMarketReturns:i,min:"",max:"",selectedRange:[]},a}return Object(y.a)(r,[{key:"componentWillMount",value:function(){i.reverse(),this.setRange()}},{key:"render",value:function(){var t=this.state,e=(t.marketReturns,t.min),r=t.max,n=t.selectedRange,l=t.displayedMarketReturns;return console.log("second results: ",l),Object(a.jsxs)("div",{children:[Object(a.jsx)(h.a,{min:e,max:r,defaultValue:[e,r],value:[n[0],n[1]],onChange:this.handleRangeChange,allowCross:"false"}),Object(a.jsx)(d,{marketReturns:l,selectedRange:n})]})}}]),r}(n.Component)),b=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,27)).then((function(e){var r=e.getCLS,a=e.getFID,n=e.getFCP,l=e.getLCP,u=e.getTTFB;r(t),a(t),n(t),l(t),u(t)}))};o.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),b()},8:function(t){t.exports=JSON.parse('[{"year":2019,"totalReturn":"31.49"},{"year":2018,"totalReturn":"-4.38"},{"year":2017,"totalReturn":"21.83"},{"year":2016,"totalReturn":"11.96"},{"year":2015,"totalReturn":"1.38"},{"year":2014,"totalReturn":"13.69"},{"year":2013,"totalReturn":"32.39"},{"year":2012,"totalReturn":"16.00"},{"year":2011,"totalReturn":"2.11"},{"year":2010,"totalReturn":"15.06"},{"year":2009,"totalReturn":"26.46"},{"year":2008,"totalReturn":"-37.00"},{"year":2007,"totalReturn":"5.49"},{"year":2006,"totalReturn":"15.79"},{"year":2005,"totalReturn":"4.91"},{"year":2004,"totalReturn":"10.88"},{"year":2003,"totalReturn":"28.68"},{"year":2002,"totalReturn":"-22.10"},{"year":2001,"totalReturn":"-11.89"},{"year":2000,"totalReturn":"-9.10"},{"year":1999,"totalReturn":"21.04"},{"year":1998,"totalReturn":"28.58"},{"year":1997,"totalReturn":"33.36"},{"year":1996,"totalReturn":"22.96"},{"year":1995,"totalReturn":"37.58"},{"year":1994,"totalReturn":"1.32"},{"year":1993,"totalReturn":"10.08"},{"year":1992,"totalReturn":"7.62"},{"year":1991,"totalReturn":"30.47"},{"year":1990,"totalReturn":"-3.10"},{"year":1989,"totalReturn":"31.69"},{"year":1988,"totalReturn":"16.61"},{"year":1987,"totalReturn":"5.25"},{"year":1986,"totalReturn":"18.67"},{"year":1985,"totalReturn":"31.73"},{"year":1984,"totalReturn":"6.27"},{"year":1983,"totalReturn":"22.56"},{"year":1982,"totalReturn":"21.55"},{"year":1981,"totalReturn":"-4.91"},{"year":1980,"totalReturn":"32.42"},{"year":1979,"totalReturn":"18.44"},{"year":1978,"totalReturn":"6.56"},{"year":1977,"totalReturn":"-7.18"},{"year":1976,"totalReturn":"23.84"},{"year":1975,"totalReturn":"37.20"},{"year":1974,"totalReturn":"-26.47"},{"year":1973,"totalReturn":"-14.66"},{"year":1972,"totalReturn":"18.98"},{"year":1971,"totalReturn":"14.31"},{"year":1970,"totalReturn":"4.01"},{"year":1969,"totalReturn":"-8.50"},{"year":1968,"totalReturn":"11.06"},{"year":1967,"totalReturn":"23.98"},{"year":1966,"totalReturn":"-10.06"},{"year":1965,"totalReturn":"12.45"},{"year":1964,"totalReturn":"16.48"},{"year":1963,"totalReturn":"22.80"},{"year":1962,"totalReturn":"-8.73"},{"year":1961,"totalReturn":"26.89"},{"year":1960,"totalReturn":"0.47"},{"year":1959,"totalReturn":"11.96"},{"year":1958,"totalReturn":"43.36"},{"year":1957,"totalReturn":"-10.78"},{"year":1956,"totalReturn":"6.56"},{"year":1955,"totalReturn":"31.56"},{"year":1954,"totalReturn":"52.62"},{"year":1953,"totalReturn":"-0.99"},{"year":1952,"totalReturn":"18.37"},{"year":1951,"totalReturn":"24.02"},{"year":1950,"totalReturn":"31.71"},{"year":1949,"totalReturn":"18.79"},{"year":1948,"totalReturn":"5.50"},{"year":1947,"totalReturn":"5.71"},{"year":1946,"totalReturn":"-8.07"},{"year":1945,"totalReturn":"36.44"},{"year":1944,"totalReturn":"19.75"},{"year":1943,"totalReturn":"25.90"},{"year":1942,"totalReturn":"20.34"},{"year":1941,"totalReturn":"-11.59"},{"year":1940,"totalReturn":"-9.78"},{"year":1939,"totalReturn":"-0.41"},{"year":1938,"totalReturn":"31.12"},{"year":1937,"totalReturn":"-35.03"},{"year":1936,"totalReturn":"33.92"},{"year":1935,"totalReturn":"47.67"},{"year":1934,"totalReturn":"-1.44"},{"year":1933,"totalReturn":"53.99"},{"year":1932,"totalReturn":"-8.19"},{"year":1931,"totalReturn":"-43.34"},{"year":1930,"totalReturn":"-24.90"},{"year":1929,"totalReturn":"-8.42"},{"year":1928,"totalReturn":"43.61"},{"year":1927,"totalReturn":"37.49"},{"year":1926,"totalReturn":"11.62"}]')}},[[26,1,2]]]);
//# sourceMappingURL=main.17b1b362.chunk.js.map