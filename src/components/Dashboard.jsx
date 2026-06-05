import React from 'react';


const Dashboard = () => {
  return (
    <main className="dashboard-main-wrapper">
      <div className="dashboard-header">
        <h1>Planta de Producción Inteligente</h1>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card card-glass">
          <h3>📦 Cajas Procesadas (Total)</h3>
          <p className="kpi-value text-cyan">1117/h</p>
          <span className="kpi-sub">PackNormal (752) + PackGas (366)</span>
        </div>
        <div className="kpi-card card-glass">
          <h3>⚡ Eficiencia Media AGVs</h3>
          <p className="kpi-value text-green">85.2%</p>
          <span className="kpi-sub">5 Vehículos Autónomos Operativos</span>
        </div>
        <div className="kpi-card card-glass">
          <h3>⏱️ Cuello de Botella Máximo</h3>
          <p className="kpi-value text-red">10.5s</p>
          <span className="kpi-sub">Estación: PackGas (Staytime Alto)</span>
        </div>
      </div>

      {/* FILA 2: Bloques Detallados (Basados en tu imagen de FlexSim) */}
      <div className="dashboard-grid">
        
        {/* Robots Paletizadores */}
        <div className="dashboard-card card-glass">
          <h2>Rendimiento de Robots Paletizadores</h2>
          <div className="robot-stats">
            <div className="robot-progress">
              <div className="circle-data">52.5%</div>
              <p><strong>Robot 1 (Línea Principal)</strong></p>
              <span className="status-badge busy">Trabajando / Utilizado</span>
            </div>
            <div className="robot-progress">
              <div className="circle-data partial">25.9%</div>
              <p><strong>Robot 2 (Línea Secundaria)</strong></p>
              <span className="status-badge idle">Tiempo de Espera Alto</span>
            </div>
          </div>
        </div>

        {/* Contenido en Colas de Espera */}
        <div className="dashboard-card card-glass">
          <h2>Estado de Colas</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Línea de Espera</th>
                <th>Actual</th>
                <th>Máximo</th>
                <th>Media</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Esperando NORMAL (Línea 1)</td>
                <td className="text-cyan">24</td>
                <td>24</td>
                <td>10.51</td>
              </tr>
              <tr>
                <td>Esperando NORMAL (Línea 2)</td>
                <td className="text-cyan">21</td>
                <td>23</td>
                <td>10.16</td>
              </tr>
              <tr>
                <td>Esperando GAS (Línea 1)</td>
                <td className="text-cyan">12</td>
                <td>12</td>
                <td>5.33</td>
              </tr>
              <tr>
                <td>Esperando GAS (Línea 2)</td>
                <td className="text-cyan">12</td>
                <td>12</td>
                <td>5.22</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tiempos de Permanencia (Staytime) */}
        <div className="dashboard-card card-glass full-width">
          <h2>Análisis de Tiempos de Ciclo (Staytime por Estación)</h2>
          <p className="section-desc">Muestra los segundos que pasa cada botella de media en los procesos críticos.</p>
          <div className="chart-bar-container">
            <div className="bar-group">
              <label>PackGas (Línea Principal)</label>
              <div className="bar-wrapper"><div className="bar color-red" style={{width: '100%'}}></div><span>10.52s</span></div>
            </div>
            <div className="bar-group">
              <label>PackGas 1 (Línea Secundaria)</label>
              <div className="bar-wrapper"><div className="bar color-orange" style={{width: '96%'}}></div><span>9.43s</span></div>
            </div>
            <div className="bar-group">
              <label>Añadir Gas (Línea 1)</label>
              <div className="bar-wrapper"><div className="bar color-yellow" style={{width: '65%'}}></div><span>10.58s</span></div>
            </div>
            <div className="bar-group">
              <label>PackNormal (Línea 1)</label>
              <div className="bar-wrapper"><div className="bar color-blue" style={{width: '39%'}}></div><span>6.33s</span></div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Dashboard;