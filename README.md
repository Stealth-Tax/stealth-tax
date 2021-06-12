# Stealth Tax - June 2021 v1.01
### <https://stealthtax.io>
### Soon to be available via IPFS on [stealthtax.crypto](https://unstoppabledomains.com/)


## The State of Theft
_Inflation is the opium of the masses - Henry Hazlitt_

Stealth Tax is entirely open source and available under the [Creative Commons License](https://creativecommons.org/licenses/by/4.0/legalcode)

## Technologies:
  * [Bootstrap v5.0](https://getbootstrap.com/)
  * [Chart.js](https://www.chartjs.org/)
  * [Canvas Gauges](https://canvas-gauges.com/)
  * [Dart Sass](https://sass-lang.com/dart-sass)
  * [NodeJS](https://nodejs.org/en/)

## Real Inflation Index (RII) methodology
We seek to provide a different perspective on inflation. Common measures focusing on consumer price inflation have many issues, but fundamental failings from our perspective are:
* Indexes involving a basket of goods are open to abuse by politicised state statistical bodies
* Consumer prices are not relevant to low time preference individuals, or anyone who wishes to build wealth over the long run ("in the long run we're all dead" is the most insidious comment ever uttered)
* Total wealth is 4-5x yearly spending, so myopic focus on consumer spending is without merit

Our methodology focuses on the following factors:
1. Broad money supply (M4x in the UK)
2. House Price Index
3. S&P GSCI commodities index (note 1)
4. CIX100 cryptocurrency index (note 2)

We take trailing 12-month percentage changes of each and weight them by 0.5, 0.25, 0.05 and 0.2 respectively. These are open to optimisation as we continue to improve our process, though some level of arbitrariness cannot be avoided. It is likely that the cryptocurrency factor will increase as bitcoinization unfolds. Data is updated as new releases come out. When data is less than monthly the lagged figure is kept in the equation.

Why do we use these data?
1. M4x is the best proxy for bank deposits, which makes up the majority of money in the system. This is not perfect due to the roundabout mechanics of fiat banking, but it is the most optimum measure, in our view. It has the largest weighting in the index as over the medium to long term there is a strong correlation between broad money growth and nominal income. Avoiding the obfuscation and noise of short-term effects and the oscillatory nature of the fiat business cycle, money quantity growth simply is inflation. 
2. House prices are crucial to the UK economy and are the largest constituent of individual wealth. As a hard asset, house prices are important for measuring inflation of GBP. In the absence of suitably hard alternatives, the fiat system has increased demand for housing as an inflation hedge. As bitcoinization manifests, we believe it will eat into this excess demand and damage the quality of the housing hedge.
3. Life consumes commodities. This cannot be abstracted away from, even when operating at low time preference. It is a pure consumption factor. Another important aspect is that it captures GBP depreciation given the UK imports most of its commodities. When the balance of payments and sterling index become more negative, this increases the GSCI contribution to the index. 
4. The most optimally hard asset is bitcoin, which is the largest constituent of the CIX100 index. Although other cryptocurrencies and fiat stablecoins also figure, most of which are not hard per se, we view the market capitalisation of the cryptosphere as reflective of demand to be on-chain and rejecting of global fiat debasement. As with housing, a rising CIX100 contributes positively to the RII as demand for hard assets is a proxy for inflation in GBP.

(note 1) corrected for GBPUSD and UK balance of payments
(note 2) corrected for GBPUSD and market capitalisation

### Release notes:
* v1.01 - 12 June 21 
  * RII Methedology Detailed
  * Historical RII data and chart included on main page
  * BAT tip integration added
  * Stealth-Tax organisation created on GitHub
* v1.0 - 10 June 21
  * Final minor changes for initial release. Deployed. See commit list for further details.
  * Next release will include backdated modelling of real inflation to show changes over last year
  * Real inflation index calculation method to be released in next cycle.

### Contact
[info@stealthtax.io](mailto:info@stealthtax.io)
[Roadmap](https://trello.com/b/ZzibImIv/roadmap)

### Support
Support via BAT and Brave Browser on <www.stealthtax.io>
Alternatively:
* **BTC**: 1KL7B1x9FRALcoTckPpf4rDzEP1Gh7VCBU
* **XMR**: 4ARzc1qxPCd3nhuaCYc4d4HQd7VL6rvQGSaqiHiiCc9XPEHWNgyuNrGaHqbtsVxHQdbiXzzSo2j68ia27vQgjdnT1QCptH7


_Copyright 2021 CCv4.0_
