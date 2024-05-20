import axios from 'axios';

type Props = {
    url: string
}

export async function fetchData({ url }: Props) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}