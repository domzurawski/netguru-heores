import Modal from 'components/overlays/Modal';
import { Outlet } from 'react-router';

export default function MainLayout() {
    return (
        <div className="ml-auto mr-auto p-4" style={{ maxWidth: '1120px' }}>
            <Modal />
            <Outlet />
        </div>
    );
}
