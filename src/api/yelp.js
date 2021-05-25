import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer daqt1dwu-g2ipNDwFoxc_j5u5LY5e5dTBnRlPhAun7e89ClW6AfYp_UYwo2MQUWJP9fVnp20PiACxQ3oNH9IrfCB_LCNz9RVJclJXjor3-IcjeS-T6PVff70wIWoYHYx'
    }
});