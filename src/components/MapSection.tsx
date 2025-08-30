import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const coverage = [
  "São Paulo, Brasil",
  "Paraná, Brasil", 
  "Santa Catarina, Brasil",
  "Rio Grande do Sul, Brasil",
  "Mato Grosso do Sul, Brasil"
];

const InteractiveMap = ({ token }: { token: string }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    const loadMapbox = async () => {
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');
      
      mapboxgl.default.accessToken = token;
      
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-51.92528, -14.235], // Center of Brazil
        zoom: 4,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.default.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add markers for each state capital
      const stateCapitals = [
        { name: 'São Paulo', coordinates: [-46.6333, -23.5505] as [number, number] },
        { name: 'Curitiba', coordinates: [-49.2731, -25.4284] as [number, number] },
        { name: 'Florianópolis', coordinates: [-48.5482, -27.5954] as [number, number] },
        { name: 'Porto Alegre', coordinates: [-51.2177, -30.0346] as [number, number] },
        { name: 'Campo Grande', coordinates: [-54.6464, -20.4486] as [number, number] }
      ];

      stateCapitals.forEach(city => {
        new mapboxgl.default.Marker({
          color: '#f97316' // construction-orange
        })
          .setLngLat(city.coordinates)
          .setPopup(
            new mapboxgl.default.Popup({ offset: 25 })
              .setHTML(`<div class="p-2"><strong>${city.name}</strong><br/>Região atendida</div>`)
          )
          .addTo(map.current);
      });
    };

    loadMapbox();

    return () => {
      if (map.current) map.current.remove();
    };
  }, [token]);

  return <div ref={mapContainer} className="w-full h-full rounded-lg" />;
};

const MapSection = () => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Área de <span className="text-construction-orange">Atendimento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Atendemos os principais estados do Centro-Sul do Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="relative">
            {showTokenInput ? (
              <div className="aspect-video bg-construction-gray-light rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <MapPin className="h-12 w-12 text-construction-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mapa Interativo</h3>
                  <p className="text-muted-foreground mb-4">
                    Para visualizar o mapa, insira seu token Mapbox
                  </p>
                </div>
                <div className="space-y-4 max-w-md mx-auto">
                  <div>
                    <Label htmlFor="mapbox-token">Token Mapbox</Label>
                    <Input
                      id="mapbox-token"
                      type="password"
                      placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIi..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={() => setShowTokenInput(false)} 
                    disabled={!mapboxToken}
                    className="w-full"
                  >
                    Carregar Mapa
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Obtenha seu token gratuito em{' '}
                    <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-construction-orange hover:underline">
                      mapbox.com
                    </a>
                  </p>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
                <InteractiveMap token={mapboxToken} />
              </div>
            )}
          </div>

          {/* Coverage Areas */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Estados Atendidos</h3>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {coverage.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-construction-gray-light rounded-lg hover:bg-construction-orange/5 transition-colors">
                  <div className="w-3 h-3 bg-construction-orange rounded-full"></div>
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="bg-construction-orange/10 p-6 rounded-lg border-l-4 border-construction-orange">
              <h4 className="font-semibold mb-2 text-construction-orange">Cobertura Completa</h4>
              <p className="text-muted-foreground mb-3">
                Atendemos todas as principais cidades e regiões metropolitanas destes estados.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Entrega expressa:</strong> Sua cidade não está listada? Entre em contato! 
                Avaliamos entregas especiais em municípios próximos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;