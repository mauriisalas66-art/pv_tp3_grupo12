export const RegistroActividad = ({ fecha }) => {
    if (!fecha) return null;

    return (
        <div style ={{ marginTop: '2rem', textAlign: 'center', color: '#64748b', fontStyle: 'italic', borderTop: '1px dashed #cbd5e1', paddingTop: '1rem', width: '100%' }}>
            Última actualización: <strong>{fecha}</strong>
        </div>
    );
};