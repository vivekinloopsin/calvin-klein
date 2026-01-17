"use client";
import { useUser } from '@/context/UserContext';

export default function ProfilePage() {
    const { user } = useUser();

    return (
        <div>
            <h3 className="section-title">Personal Information</h3>
            <div className="info-grid">
                <div className="field-group">
                    <label>Email Address</label>
                    <input type="email" value={user?.email || ''} readOnly className="input-field" />
                </div>
                <div className="field-group">
                    <label>Password</label>
                    <input type="password" value="********" readOnly className="input-field" />
                    <a href="#" className="edit-link">Edit</a>
                </div>
            </div>
            <style jsx>{`
                .section-title {
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 30px;
                }
                .info-grid {
                    max-width: 400px;
                }
                .field-group {
                    margin-bottom: 24px;
                }
                label {
                    display: block;
                    font-size: 12px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    color: #666;
                }
                .input-field {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ccc;
                    background: #f4f4f4;
                    color: #666;
                }
                 .edit-link {
                    display: inline-block;
                    margin-top: 8px;
                    text-decoration: underline;
                    font-size: 12px;
                }
            `}</style>
        </div>
    );
}
