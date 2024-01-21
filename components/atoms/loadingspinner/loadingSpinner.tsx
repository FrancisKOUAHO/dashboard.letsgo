import {NextPage} from 'next'
import {LineWave} from 'react-loader-spinner'

const LoadingSpinner: NextPage = () => {
    return (
        <LineWave
            height="80"
            width="80"
            wrapperClass={`c-loading-spinner`}
            ariaLabel="Loading triangle spinner"
            visible
        />

    );
};

export default LoadingSpinner;
