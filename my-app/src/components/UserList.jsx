import React, { useState, useEffect } from "react";
import { userService } from "../services/userService";
import { useAuth } from "../context/AuthContext";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user: currentUser } = useAuth();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await userService.getAllUsers();
      setUsers(response.users || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <div className="loading-container">Cargando usuarios...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="users-list-container">
      <h2>Lista de Usuarios</h2>
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.nombre}</h3>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {user.telefono && (
              <p>
                <strong>Teléfono:</strong> {user.telefono}
              </p>
            )}
            {user.id === currentUser?.id && (
              <span className="current-user-badge">Usuario actual</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
