const express = require("express");
const axios = require("axios");
const router = express.Router();

// Endpoint: Get Available Countries
router.get("/available", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.DATE_NAGER_API}/AvailableCountries`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching available countries" });
  }
});

// Endpoint: Get Country Info
router.get("/info/:countryCode", async (req, res) => {
  const { countryCode } = req.params;
  try {
    // Get border countries
    const borderResponse = await axios.get(
      `${process.env.DATE_NAGER_API}/CountryInfo/${countryCode}`
    );
    const borderCountries = borderResponse.data.borders;

    // Get population data
    const populationResponse = await axios.get(
      `${process.env.COUNTRIES_NOW_API}/countries/population`,
      {
        params: { country: countryCode },
      }
    );

    // Get flag URL
    const flagResponse = await axios.get(
      `${process.env.COUNTRIES_NOW_API}/countries/flag/images`,
      {
        params: { country: countryCode },
      }
    );

    res.json({
      borderCountries,
      population: populationResponse.data,
      flag: flagResponse.data.flag,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching country info" });
  }
});

module.exports = router;
