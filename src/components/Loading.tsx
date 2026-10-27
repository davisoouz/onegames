import CircularProgress from '@mui/joy/CircularProgress';

export default function Loading() {

    return (
        <div className="w-full py-8 flex justify-center md:col-span-5">
            <CircularProgress 
                variant="plain" 
                size="md"
                value={50}
                sx={{
                    '--CircularProgress-progressColor': '#22D3EE !important',
                }} 
            />
        </div>
    )
}