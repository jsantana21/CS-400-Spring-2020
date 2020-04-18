import {WeatherData} from './Weather Data';

/**
 * The following data is from the Weather Unlocked API I used in PS4.
 * For the sake of creating this mock file, I collected weather data from 7 places in the US:
 * Boston, NYC, Washington DC, Los Angeles, Chicago, San Francisco, & Houston
 * The following weather data was captured on Saturday, April 18, 2020
 * NOTE: I also added the 'location' tag for the sake of this mock file
 */

export const WeatherDataArray: WeatherData[] =
  [
    /**
     * BU Campus, Boston (ZipCode: 02215) Weather Data
     */
    {
      location: 'Boston',
      lat: 42.36,
      lon: -71.01,
      alt_m: 6.0,
      alt_ft: 19.69,
      wx_desc: 'Light Rain, Mist',
      wx_code: 61,
      wx_icon: 'OccLightRain.gif',
      temp_c: 3.3,
      temp_f: 37.94,
      feelslike_c: -1.54,
      feelslike_f: 29.23,
      humid_pct: 89.0,
      windspd_mph: 14.91,
      windspd_kmh: 24.0,
      windspd_kts: 12.96,
      windspd_ms: 6.67,
      winddir_deg: 30.0,
      winddir_compass: 'NNE',
      cloudtotal_pct: 100.0,
      vis_km: 4.8,
      vis_mi: 2.98,
      vis_desc: null,
      slp_mb: 1007.8,
      slp_in: 29.84,
      dewpoint_c: 1.67,
      dewpoint_f: 35.01
    },

    /**
     * Harlem, NYC (ZipCode: 10030) Weather Data
     */
    {
      location: 'New York City',
      lat: 40.78,
      lon: -73.97,
      alt_m: 47.0,
      alt_ft: 154.2,
      wx_desc: 'Cloudy',
      wx_code: 3,
      wx_icon: 'Overcast.gif',
      temp_c: 7.8,
      temp_f: 46.04,
      feelslike_c: 17.97,
      feelslike_f: 64.35,
      humid_pct: 63.0,
      windspd_mph: 0.0,
      windspd_kmh: 0.0,
      windspd_kts: 0.0,
      windspd_ms: 0.0,
      winddir_deg: 350.0,
      winddir_compass: 'N',
      cloudtotal_pct: 100.0,
      vis_km: 16.0,
      vis_mi: 9.94,
      vis_desc: null,
      slp_mb: 1009.1,
      slp_in: 29.88,
      dewpoint_c: 1.23,
      dewpoint_f: 34.21
    },

    /**
     * White House, Washington DC (Zip Code: 20500) Weather Data
     */
    {
      location: 'Washington DC',
      lat: 38.85,
      lon: -77.03,
      alt_m: 4.0,
      alt_ft: 13.12,
      wx_desc: 'Partly cloudy',
      wx_code: 1,
      wx_icon: 'PartlyCloudyDay.gif',
      temp_c: 11.7,
      temp_f: 53.06,
      feelslike_c: 8.07,
      feelslike_f: 46.53,
      humid_pct: 46.0,
      windspd_mph: 27.34,
      windspd_kmh: 44.0,
      windspd_kts: 23.76,
      windspd_ms: 12.22,
      winddir_deg: 320.0,
      winddir_compass: 'NW',
      cloudtotal_pct: 50.0,
      vis_km: 16.0,
      vis_mi: 9.94,
      vis_desc: null,
      slp_mb: 1012.9,
      slp_in: 30.0,
      dewpoint_c: 0.51,
      dewpoint_f: 32.92
    },

    /**
     * Hollywood, Los Angeles (Zip Code: 90027) Weather Data
     */
    {
      location: 'Los Angeles',
      lat: 34.02,
      lon: -118.28,
      alt_m: 56.0,
      alt_ft: 183.73,
      wx_desc: 'Haze',
      wx_code: 3,
      wx_icon: 'Overcast.gif',
      temp_c: 18.3,
      temp_f: 64.94,
      feelslike_c: 19.02,
      feelslike_f: 66.24,
      humid_pct: 58.0,
      windspd_mph: 3.73,
      windspd_kmh: 6.0,
      windspd_kts: 3.24,
      windspd_ms: 1.67,
      winddir_deg: 240.0,
      winddir_compass: 'WSW',
      cloudtotal_pct: 100.0,
      vis_km: 9.7,
      vis_mi: 6.03,
      vis_desc: null,
      slp_mb: 1018.3,
      slp_in: 30.16,
      dewpoint_c: 9.92,
      dewpoint_f: 49.85
    },

    /**
     * City of Chicago Office of the Mayor, Chicago (ZipCode: 60602) Weather Data
     */
    {
      location: 'Chicago',
      lat: 41.78,
      lon: -87.76,
      alt_m: 188.0,
      alt_ft: 616.8,
      wx_desc: 'Sunny skies',
      wx_code: 0,
      wx_icon: 'Sunny.gif',
      temp_c: 13.3,
      temp_f: 55.94,
      feelslike_c: 10.63,
      feelslike_f: 51.13,
      humid_pct: 35.0,
      windspd_mph: 21.75,
      windspd_kmh: 35.0,
      windspd_kts: 18.9,
      windspd_ms: 9.72,
      winddir_deg: 210.0,
      winddir_compass: 'SSW',
      cloudtotal_pct: 25.0,
      vis_km: 16.0,
      vis_mi: 9.94,
      vis_desc: null,
      slp_mb: 1011.5,
      slp_in: 29.95,
      dewpoint_c: -1.78,
      dewpoint_f: 28.79
    },

    /**
     * San Francisco (ZipCode: 94110) Weather Data
     */
    {
      location: 'San Francisco',
      lat: 37.62,
      lon: -122.36,
      alt_m: 3.0,
      alt_ft: 9.84,
      wx_desc: 'Mostly cloudy',
      wx_code: 1,
      wx_icon: 'PartlyCloudyDay.gif',
      temp_c: 17.8,
      temp_f: 64.04,
      feelslike_c: 17.23,
      feelslike_f: 63.01,
      humid_pct: 48.0,
      windspd_mph: 12.43,
      windspd_kmh: 20.0,
      windspd_kts: 10.8,
      windspd_ms: 5.56,
      winddir_deg: 220.0,
      winddir_compass: 'SW',
      cloudtotal_pct: 75.0,
      vis_km: 16.0,
      vis_mi: 9.94,
      vis_desc: null,
      slp_mb: 1018.6,
      slp_in: 30.16,
      dewpoint_c: 6.68,
      dewpoint_f: 44.02
    },

    /**
     * Houston (ZipCode: 77001) Weather Data
     */
    {
      location: 'Houston',
      lat: 29.64,
      lon: -95.28,
      alt_m: 14.0,
      alt_ft: 45.93,
      wx_desc: 'Light Rain with Thunderstorm, Mist',
      wx_code: 92,
      wx_icon: 'CloudRainThunder.gif',
      temp_c: 21.7,
      temp_f: 71.06,
      feelslike_c: 22.35,
      feelslike_f: 72.23,
      humid_pct: 90.0,
      windspd_mph: 9.32,
      windspd_kmh: 15.0,
      windspd_kts: 8.1,
      windspd_ms: 4.17,
      winddir_deg: 120.0,
      winddir_compass: 'ESE',
      cloudtotal_pct: 100.0,
      vis_km: 4.0,
      vis_mi: 2.49,
      vis_desc: null,
      slp_mb: 1012.5,
      slp_in: 29.98,
      dewpoint_c: 19.99,
      dewpoint_f: 67.98
    }
    ];
