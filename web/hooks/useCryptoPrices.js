import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchCryptoPrices = async () => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 5,
            page: 1,
            sparkline: false,
        },
    });
    return data;
};

export const useCryptoPrices = () => {
    return useQuery({
        queryKey: ['cryptoPrices'],
        queryFn: fetchCryptoPrices,
        staleTime: 60000,
    });
};
