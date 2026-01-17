"use client";
import { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { X, ArrowLeft } from 'lucide-react';

type ViewState = 'login' | 'register';

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [view, setView] = useState<ViewState>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const { login, register } = useUser();
    const router = useRouter();

    if (!isOpen) return null;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            onClose();
            router.push('/account');
        } else {
            alert('Invalid credentials. Hint: fionnapink@airsworld.net / 8078@Prime');
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await register({ firstName, lastName, email, password });
        if (success) {
            onClose();
            router.push('/account');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}><X size={24} /></button>

                {view === 'login' ? (
                    <>
                        <h2>SIGN IN</h2>
                        <form onSubmit={handleLogin}>
                            <div className="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="submit-btn black">SIGN IN</button>
                            <div className="links">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </form>
                        <div className="divider">
                            <span>OR</span>
                        </div>
                        <button className="submit-btn white" onClick={() => setView('register')}>
                            CREATE ACCOUNT
                        </button>
                    </>
                ) : (
                    <>
                        <button className="back-btn" onClick={() => setView('login')}>
                            <ArrowLeft size={20} className="mr-2" /> Back
                        </button>
                        <h2>CREATE ACCOUNT</h2>
                        <form onSubmit={handleRegister}>
                            <div className="input-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    required
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    required
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <p className="legalese">
                                By creating an account, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                            </p>
                            <button type="submit" className="submit-btn black">CREATE ACCOUNT</button>
                        </form>
                    </>
                )}
            </div>
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 3000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .backdrop {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.5);
                }
                .modal-content {
                    background: white;
                    padding: 40px;
                    width: 100%;
                    max-width: 440px;
                    position: relative;
                    z-index: 10;
                    max-height: 90vh;
                    overflow-y: auto;
                }
                .close-btn {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                }
                .back-btn {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    color: #666;
                }
                h2 {
                    font-size: 24px;
                    text-align: center;
                    margin-bottom: 32px;
                    font-weight: 700;
                    letter-spacing: 1px;
                }
                .input-group {
                    margin-bottom: 20px;
                }
                label {
                    display: block;
                    font-size: 12px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }
                input {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ccc;
                    font-size: 16px;
                }
                .submit-btn {
                    width: 100%;
                    padding: 16px;
                    font-weight: 700;
                    font-size: 14px;
                    margin-bottom: 20px;
                    border: 1px solid black;
                    cursor: pointer;
                }
                .submit-btn.black {
                    background: black;
                    color: white;
                }
                .submit-btn.white {
                    background: white;
                    color: black;
                }
                .links {
                    display: flex;
                    justify-content: center;
                    font-size: 13px;
                }
                .links a { text-decoration: underline; }
                .divider {
                    text-align: center;
                    margin: 20px 0;
                    position: relative;
                }
                .divider span {
                    background: white;
                    padding: 0 10px;
                    position: relative;
                    z-index: 1;
                    font-size: 12px;
                    color: #666;
                }
                .divider::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    border-top: 1px solid #eee;
                }
                .legalese {
                    font-size: 11px;
                    margin-bottom: 20px;
                    color: #666;
                    line-height: 1.5;
                }
                .legalese a { text-decoration: underline; }
            `}</style>
        </div>
    );
}
