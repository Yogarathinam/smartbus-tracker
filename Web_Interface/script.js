 const busRoutes = [
  {
    number: "1",
    name: "New Maloya - Manimra",
    color: "#667eea",
    stops: [
      { name: "New Maloya Colony", lat: 30.7, lng: 76.75 },
      { name: "Dadumra Village", lat: 30.705, lng: 76.752 },
      { name: "CTU W/S", lat: 30.7075, lng: 76.7535 },
      { name: "PGI", lat: 30.71, lng: 76.755 },
      { name: "ISBT-17", lat: 30.715, lng: 76.758 },
      { name: "R/Station", lat: 30.718, lng: 76.7595 },
      { name: "Kalagram", lat: 30.72, lng: 76.7605 },
      { name: "H/B Chowk", lat: 30.722, lng: 76.762 },
      { name: "Manimra", lat: 30.725, lng: 76.765 },
    ],
  },
  {
    number: "4A",
    name: "ISBT-43 Circular",
    color: "#f093fb",
    stops: [
      { name: "ISBT-43", lat: 30.72, lng: 76.76 },
      { name: "Aroma", lat: 30.725, lng: 76.765 },
      { name: "PGI", lat: 30.73, lng: 76.768 },
      { name: "Badheri", lat: 30.735, lng: 76.77 },
      { name: "43/44", lat: 30.73, lng: 76.77 },  // approximate lat/lng
      { name: "Dhanas", lat: 30.735, lng: 76.77 },
      { name: "41mkt", lat: 30.73, lng: 76.77 },
      { name: "42mkt", lat: 30.74, lng: 76.77 }
    ],
  },
  {
    number: "5A",
    name: "Ram Darbar Circular",
    color: "#4facfe",
    stops: [
      { name: "Ram Darbar", lat: 30.73, lng: 76.77 },
      { name: "PGI", lat: 30.735, lng: 76.775 },
      { name: "Maloya", lat: 30.74, lng: 76.78 },
      { name: "ISBT-43", lat: 30.745, lng: 76.782 },
    ],
  },
  {
    number: "6",
    name: "New Maloya - Raipur Kalan",
    color: "#667eea",
    stops: [
      { name: "New Maloya Colony", lat: 30.7, lng: 76.75 },
      { name: "Maloya", lat: 30.705, lng: 76.755 },
      { name: "Ram Darbar", lat: 30.71, lng: 76.76 },
      { name: "Raipur Kalan", lat: 30.715, lng: 76.765 },
    ],
  },
  {
    number: "7",
    name: "New Maloya - Ram Darbar",
    color: "#f093fb",
    stops: [
      { name: "New Maloya Colony", lat: 30.71, lng: 76.75 },
      { name: "ISBT-17", lat: 30.715, lng: 76.755 },
      { name: "Aroma", lat: 30.72, lng: 76.76 },
      { name: "Ram Darbar", lat: 30.725, lng: 76.765 },
    ],
  },
  {
    number: "9A",
    name: "Mansa Devi",
    color: "#4facfe",
    stops: [
      { name: "Mansa Devi", lat: 30.75, lng: 76.77 },
      { name: "Manimra", lat: 30.725, lng: 76.765 },
      { name: "H.Board", lat: 30.722, lng: 76.762 },
      { name: "R/Station", lat: 30.718, lng: 76.76 },
      { name: "64", lat: 30.72, lng: 76.76 },
      { name: "63", lat: 30.72, lng: 76.76 },
      { name: "Sec-66", lat: 30.715, lng: 76.75 },
      { name: "Ind.Ph-9", lat: 30.71, lng: 76.74 },
      { name: "Jagatpura", lat: 30.7, lng: 76.73 },
      { name: "Ind.Ph-2", lat: 30.68, lng: 76.72 },
    ],
  },
  {
    number: "11A",
    name: "Rock Garden to Sukhna Lake",
    color: "#f093fb",
    stops: [
      { name: "Rock Garden", lat: 30.75, lng: 76.78 },
      { name: "Sukhna Lake", lat: 30.76, lng: 76.79 },
      { name: "BIRD PARK", lat: 30.755, lng: 76.785 },
    ],
  },
  {
    number: "28A",
    name: "ISBT-43 to Rani Majra",
    color: "#667eea",
    stops: [
      { name: "ISBT-43", lat: 30.72, lng: 76.76 },
      { name: "PGI", lat: 30.725, lng: 76.765 },
      { name: "Eco City", lat: 30.73, lng: 76.77 },
      { name: "Dhanas", lat: 30.735, lng: 76.77 },
      { name: "Todde Majra", lat: 30.74, lng: 76.77 },
      { name: "Rasulpur", lat: 30.745, lng: 76.775 },
      { name: "Rani Majra", lat: 30.755, lng: 76.78 },
    ],
  },
  {
    number: "30A",
    name: "ISBT-43 Cantonment",
    color: "#f093fb",
    stops: [
      { name: "ISBT-43", lat: 30.72, lng: 76.76 },
      { name: "Aroma", lat: 30.725, lng: 76.765 },
      { name: "PGI", lat: 30.73, lng: 76.768 },
      { name: "Rly Crossing", lat: 30.735, lng: 76.77 },
      { name: "Kalagram", lat: 30.74, lng: 76.775 },
      { name: "Fun Republic", lat: 30.745, lng: 76.78 },
      { name: "Tank Chowk", lat: 30.75, lng: 76.78 },
      { name: "Command Hospital", lat: 30.755, lng: 76.78 },
    ],
  },
  {
    number: "32",
    name: "PGI to Derabassi",
    color: "#4facfe",
    stops: [
      { name: "PGI", lat: 30.72, lng: 76.76 },
      { name: "Derabassi", lat: 30.75, lng: 76.76 },
      { name: "Airport", lat: 30.74, lng: 76.77 },
    ],
  },
  {
    number: "35A",
    name: "Sector 123 to PGI",
    color: "#667eea",
    stops: [
      { name: "Sector 123", lat: 30.73, lng: 76.77 },
      { name: "PGI", lat: 30.735, lng: 76.775 },
      { name: "Balongi", lat: 30.74, lng: 76.78 },
      { name: "Daun", lat: 30.745, lng: 76.785 },
      { name: "Jalvayu Towers", lat: 30.75, lng: 76.79 },
    ],
  },
  {
    number: "80",
    name: "PGI to Zirakpur",
    color: "#f093fb",
    stops: [
      { name: "PGI", lat: 30.72, lng: 76.8 },
      { name: "Aroma", lat: 30.725, lng: 76.805 },
      { name: "Elante Mall", lat: 30.73, lng: 76.81 },
      { name: "Zirakpur", lat: 30.735, lng: 76.815 },
    ],
  },
  {
    number: "240",
    name: "ISBT-43 to Mansa Devi",
    color: "#4facfe",
    stops: [
      { name: "ISBT-43", lat: 30.73, lng: 76.81 },
      { name: "Elante Mall", lat: 30.735, lng: 76.815 },
      { name: "H/B Chowk", lat: 30.74, lng: 76.82 },
      { name: "Mansa Devi", lat: 30.745, lng: 76.825 },
    ],
  },
  {
    number: "216",
    name: "ISBT-43 to Derabassi",
    color: "#667eea",
    stops: [
      { name: "ISBT-43", lat: 30.74, lng: 76.75 },
      { name: "Tribune Chowk", lat: 30.745, lng: 76.752 },
      { name: "Airport", lat: 30.75, lng: 76.755 },
      { name: "Derabassi", lat: 30.755, lng: 76.758 },
    ],
  },
  {
    number: "38B",
    name: "Tangori Route",
    color: "#f093fb",
    stops: [
      { name: "PGI", lat: 30.72, lng: 76.78 },
      { name: "Tangori", lat: 30.74, lng: 76.79 },
      { name: "Sohana", lat: 30.75, lng: 76.80 },
    ],
  },
  {
    number: "202",
    name: "Civil Sectt./High Court Route",
    color: "#4facfe",
    stops: [
      { name: "ISBT-43", lat: 30.73, lng: 76.80 },
      { name: "Civil Sectt./High Court", lat: 30.735, lng: 76.815 },
      { name: "Tribune Chowk", lat: 30.740, lng: 76.82 },
    ],
  },
  {
    number: "2F",
    name: "Platinum Homes Route",
    color: "#667eea",
    stops: [
      { name: "PGI", lat: 30.72, lng: 76.76 },
      { name: "CTU Workshop", lat: 30.725, lng: 76.77 },
      { name: "Panchkula Sec-8", lat: 30.73, lng: 76.78 },
      { name: "Sushma Square", lat: 30.735, lng: 76.785 },
    ],
  },
  {
    number: "212",
    name: "Derabassi Route",
    color: "#f093fb",
    stops: [
      { name: "PGI", lat: 30.72, lng: 76.76 },
      { name: "Derabassi", lat: 30.735, lng: 76.78 },
      { name: "Piccadilly", lat: 30.74, lng: 76.79 },
      { name: "Airport", lat: 30.745, lng: 76.80 },
      { name: "Zirakpur", lat: 30.75, lng: 76.805 },
      { name: "Bhankarpur", lat: 30.755, lng: 76.81 },
    ],
  },
];


       // const GEMINI_API_KEY = "AIzaSyC3TUiL76PBczdpugKO9cKTCeunLTzZVQA";

        // Login state management
        let currentUser = null;
        let otpTimer = null;
        let resendTimer = null;

        // Get all unique stops for autocomplete
        const allStops = [...new Set(busRoutes.flatMap(route => 
            route.stops.map(stop => stop.name)
        ))].sort();

        // Normalize function
        function normalize(str) {
            return str.toLowerCase().replace(/[^a-z0-9]/g, '');
        }

        // Map variables
        let map, busMarkers = {}, stopMarkers = [], routeLayers = [];
        let simulationInterval;
        let recognition;
        let synth = window.speechSynthesis;

        // Initialize everything when DOM loads
        document.addEventListener('DOMContentLoaded', function() {
            initializeParticles();
            initializeAutocomplete();
            initializeMap();
            initializeNavigation();
            initializeLogin();
            updateStats();
            
            // Check if user is already logged in
            checkLoginStatus();
            
            // Initialize bus simulation
            setTimeout(startBusSimulation, 2000);
        });

        // Login Functions
        function initializeLogin() {
            const loginForm = document.getElementById('loginForm');
            const mobileInput = document.getElementById('mobileNumber');
            const otpInputs = document.querySelectorAll('.otp-input');
            
            // Mobile number input validation
            mobileInput.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^0-9]/g, '');
                if (this.value.length > 10) {
                    this.value = this.value.slice(0, 10);
                }
            });

            // Login form submission
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                sendOTP();
            });

            // OTP input handling
            otpInputs.forEach((input, index) => {
                input.addEventListener('input', function(e) {
                    if (this.value.length === 1 && index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                });

                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Backspace' && !this.value && index > 0) {
                        otpInputs[index - 1].focus();
                    }
                });
            });

            // OTP verification button
            document.getElementById('verifyOtpBtn').addEventListener('click', verifyOTP);
            document.getElementById('resendOtpBtn').addEventListener('click', resendOTP);
        }

        function openLoginModal() {
            document.getElementById('loginModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeLoginModal() {
            document.getElementById('loginModal').style.display = 'none';
            document.body.style.overflow = 'auto';
            resetLoginForm();
        }

        function resetLoginForm() {
            document.getElementById('loginForm').style.display = 'flex';
            document.getElementById('otpContainer').style.display = 'none';
            document.getElementById('mobileNumber').value = '';
            document.getElementById('loginMessage').innerHTML = '';
            document.querySelectorAll('.otp-input').forEach(input => input.value = '');
            
            if (otpTimer) clearInterval(otpTimer);
            if (resendTimer) clearInterval(resendTimer);
        }

        function sendOTP() {
            const mobile = document.getElementById('mobileNumber').value;
            const messageDiv = document.getElementById('loginMessage');
            const sendBtn = document.getElementById('sendOtpBtn');
            
            // Validation
            if (mobile.length !== 10) {
                showMessage('Please enter a valid 10-digit mobile number', 'error');
                return;
            }

            // Simulate OTP sending
            sendBtn.disabled = true;
            sendBtn.textContent = 'Sending...';
            
            setTimeout(() => {
                // Hide login form, show OTP form
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('otpContainer').style.display = 'block';
                document.getElementById('otpMobileDisplay').textContent = 
                    mobile.substring(0, 2) + 'XXXX' + mobile.substring(6);
                
                showMessage('OTP sent successfully! Use 1234 for demo.', 'success');
                startOTPTimer();
                
                // Reset button
                sendBtn.disabled = false;
                sendBtn.textContent = 'Send OTP';
            }, 2000);
        }

        function verifyOTP() {
            const otpInputs = document.querySelectorAll('.otp-input');
            const otp = Array.from(otpInputs).map(input => input.value).join('');
            const mobile = document.getElementById('mobileNumber').value;
            
            if (otp.length !== 4) {
                showMessage('Please enter complete OTP', 'error');
                return;
            }
            
            // Demo: Accept 1234 as valid OTP
            if (otp === '1234') {
                // Simulate successful login
                const userData = {
                    mobile: mobile,
                    name: 'User ' + mobile.substring(6),
                    loginTime: new Date().toISOString()
                };
                
                // Store user data
                localStorage.setItem('smartbus_user', JSON.stringify(userData));
                currentUser = userData;
                
                // Update UI
                updateLoginUI(true);
                closeLoginModal();
                showMessage('Login successful! Welcome to SmartBus.', 'success');
                
            } else {
                showMessage('Invalid OTP. Please try again.', 'error');
                // Clear OTP inputs
                otpInputs.forEach(input => input.value = '');
                otpInputs[0].focus();
            }
        }

        function resendOTP() {
            const resendBtn = document.getElementById('resendOtpBtn');
            resendBtn.disabled = true;
            
            // Simulate resending OTP
            setTimeout(() => {
                showMessage('OTP resent successfully!', 'info');
                startOTPTimer();
                startResendTimer();
            }, 1000);
        }

        function startOTPTimer() {
            let timeLeft = 300; // 5 minutes
            const timerDiv = document.getElementById('otpTimer');
            
            otpTimer = setInterval(() => {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                timerDiv.textContent = `OTP expires in ${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                if (timeLeft <= 0) {
                    clearInterval(otpTimer);
                    timerDiv.textContent = 'OTP expired. Please resend.';
                }
                timeLeft--;
            }, 1000);
        }

        function startResendTimer() {
            let timeLeft = 30; // 30 seconds before allowing resend
            const resendBtn = document.getElementById('resendOtpBtn');
            
            resendTimer = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(resendTimer);
                    resendBtn.disabled = false;
                    resendBtn.textContent = 'Resend OTP';
                } else {
                    resendBtn.textContent = `Resend in ${timeLeft}s`;
                }
                timeLeft--;
            }, 1000);
        }

        function checkLoginStatus() {
            const userData = localStorage.getItem('smartbus_user');
            if (userData) {
                currentUser = JSON.parse(userData);
                updateLoginUI(true);
            }
        }

        function updateLoginUI(isLoggedIn) {
            const loginBtn = document.getElementById('headerLoginBtn');
            const userProfile = document.getElementById('userProfile');
            
            if (isLoggedIn && currentUser) {
                loginBtn.style.display = 'none';
                userProfile.style.display = 'flex';
                
                const avatar = document.getElementById('userAvatar');
                const name = document.getElementById('userName');
                
                avatar.textContent = currentUser.name.charAt(0).toUpperCase();
                name.textContent = currentUser.name;
            } else {
                loginBtn.style.display = 'flex';
                userProfile.style.display = 'none';
            }
        }

        function logout() {
            localStorage.removeItem('smartbus_user');
            currentUser = null;
            updateLoginUI(false);
            showMessage('Logged out successfully!', 'info');
        }

        function showMessage(message, type) {
            const messageDiv = document.getElementById('loginMessage');
            messageDiv.innerHTML = `<div class="message ${type}">${message}</div>`;
            
            // Auto-hide after 3 seconds for success/info messages
            if (type === 'success' || type === 'info') {
                setTimeout(() => {
                    messageDiv.innerHTML = '';
                }, 3000);
            }
        }

        // Create floating particles
        function initializeParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (6 + Math.random() * 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize autocomplete functionality
        function initializeAutocomplete() {
            setupAutocomplete('fromStop', 'fromSuggestions');
            setupAutocomplete('toStop', 'toSuggestions');
            
            // Add event listeners
            document.getElementById('fromStop').addEventListener('keydown', function(e) {
                if (e.key === 'Enter') findRoutes();
            });
            document.getElementById('toStop').addEventListener('keydown', function(e) {
                if (e.key === 'Enter') findRoutes();
            });
        }

        function setupAutocomplete(inputId, suggestionsId) {
            const input = document.getElementById(inputId);
            const suggestions = document.getElementById(suggestionsId);
            
            input.addEventListener('input', function(e) {
                const query = normalize(e.target.value);
                suggestions.innerHTML = '';
                
                if (query.length === 0) {
                    suggestions.style.display = 'none';
                    return;
                }
                
                const matches = allStops.filter(stop => 
                    normalize(stop).includes(query)
                ).slice(0, 5);
                
                if (matches.length > 0) {
                    matches.forEach(match => {
                        const item = document.createElement('div');
                        item.className = 'suggestion-item';
                        item.textContent = match;
                        item.onclick = () => {
                            input.value = match;
                            suggestions.style.display = 'none';
                        };
                        suggestions.appendChild(item);
                    });
                    suggestions.style.display = 'block';
                } else {
                    suggestions.style.display = 'none';
                }
            });
            
            // Hide suggestions when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.input-group')) {
                    suggestions.style.display = 'none';
                }
            });
        }

        // Initialize map
        function initializeMap() {
            map = L.map('map').setView([30.73, 76.78], 12);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);
            
            // Add stops as markers
            addStopMarkers();
            // Add route polylines
            addRouteLines();
            // Add bus markers
            addBusMarkers();
        }

        function addStopMarkers() {
            busRoutes.forEach(route => {
                route.stops.forEach(stop => {
                    const marker = L.circleMarker([stop.lat, stop.lng], {
                        radius: 6,
                        fillColor: route.color,
                        color: '#fff',
                        weight: 2,
                        opacity: 1,
                        fillOpacity: 0.8
                    }).addTo(map);
                    
                    marker.bindPopup(`
                        <div style="text-align: center;">
                            <strong>${stop.name}</strong><br>
                            <small>Next bus: ${stop.time || 'N/A'}</small>
                        </div>
                    `);
                    
                    stopMarkers.push(marker);
                });
            });
        }

        function addRouteLines() {
            busRoutes.forEach(route => {
                const coordinates = route.stops.map(stop => [stop.lat, stop.lng]);
                const polyline = L.polyline(coordinates, {
                    color: route.color,
                    weight: 4,
                    opacity: 0.7
                }).addTo(map);
                
                polyline.bindPopup(`
                    <div style="text-align: center;">
                        <strong>Route ${route.number}</strong><br>
                        ${route.name}
                    </div>
                `);
                
                routeLayers.push(polyline);
            });
        }

        function addBusMarkers() {
            busRoutes.forEach(route => {
                const firstStop = route.stops[0];
                const busIcon = L.divIcon({
                    html: `
                        <div style="
                            background: ${route.color};
                            color: white;
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-weight: bold;
                            font-size: 12px;
                            border: 2px solid white;
                            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                        ">🚌</div>
                    `,
                    iconSize: [30, 30],
                    className: 'bus-marker'
                });
                
                const marker = L.marker([firstStop.lat, firstStop.lng], {
                    icon: busIcon
                }).addTo(map);
                
                marker.bindPopup(`
                    <div style="text-align: center;">
                        <strong>Bus ${route.number}</strong><br>
                        ${route.name}<br>
                        <button onclick="trackBus('${route.number}')" style="
                            background: ${route.color};
                            color: white;
                            border: none;
                            padding: 5px 10px;
                            border-radius: 5px;
                            margin-top: 5px;
                            cursor: pointer;
                        ">Track Bus</button>
                    </div>
                `);
                
                busMarkers[route.number] = {
                    marker: marker,
                    route: route,
                    currentStopIndex: 0,
                    progress: 0
                };
            });
        }

        // Start bus movement simulation
        function startBusSimulation() {
            simulationInterval = setInterval(() => {
                Object.values(busMarkers).forEach(bus => {
                    const route = bus.route;
                    const currentStop = route.stops[bus.currentStopIndex];
                    const nextStop = route.stops[(bus.currentStopIndex + 1) % route.stops.length];
                    
                    // Move towards next stop
                    bus.progress += 0.02; // Adjust speed here
                    
                    if (bus.progress >= 1) {
                        bus.currentStopIndex = (bus.currentStopIndex + 1) % route.stops.length;
                        bus.progress = 0;
                    }
                    
                    // Calculate intermediate position
                    const lat = currentStop.lat + (nextStop.lat - currentStop.lat) * bus.progress;
                    const lng = currentStop.lng + (nextStop.lng - currentStop.lng) * bus.progress;
                    
                    bus.marker.setLatLng([lat, lng]);
                });
            }, 1000);
        }

        // Hero search function

// Assume busRoutes is your array of bus routes with stops and other info.

// Function to perform search and display route info
function performRouteSearch() {
  const inputEl = document.getElementById('heroSearch');  // Your search input ID
  // Hide voice output and show text search results
  document.getElementById('voiceOutput').style.display = 'none';
  document.getElementById('searchResult').style.display = 'block';

  const resultEl = document.getElementById('searchResult');
  const query = inputEl.value.trim();
  if (!query) return;
  
  const qNorm = normalize(query);
  
  // Try find bus by exact number
  let route = busRoutes.find(r => normalize(r.number) === qNorm);
  
  if (route) {
    renderRoute(route);
    return;
  }
  
  // If not found by bus number, try find all routes that have a stop that matches partially
  let routesWithStop = busRoutes.filter(r => 
    r.stops.some(s => normalize(s.name).includes(qNorm))
  );
  
  if (routesWithStop.length === 0) {
    resultEl.innerHTML = `<p>No bus or stop found matching "${query}". Try different keywords.</p>`;
    return;
  }
  
  // Show all routes that serve the stop in a list, user can click to view route
  let html = `<h3>Routes serving stop "${query}":</h3><ul>`;
  routesWithStop.forEach(r => {
    html += `<li><a href="#" onclick="renderRouteByNumber('${r.number}')">Bus ${r.number} - ${r.name}</a></li>`;
  });
  html += `</ul>`;
  
  resultEl.innerHTML = html;
}


function renderRouteByNumber(busNumber) {
  const route = busRoutes.find(r => r.number === busNumber);
  if (route) {
    renderRoute(route);
  }
}

// Render route info to the result container
function renderRoute(route) {
  const resultEl = document.getElementById('searchResult');
  const start = route.stops[0];
  const end = route.stops[route.stops.length - 1];
  const stopsList = route.stops.map(s => `<li>${s.name}</li>`).join('');
  
  resultEl.innerHTML = `
    <h3>Bus Number: ${route.number} - ${route.name}</h3>
    <p><strong>Starting Point:</strong> ${start.name}</p>
    <p><strong>Ending Point:</strong> ${end.name}</p>
    <p><strong>Stops in between (${route.stops.length} total):</strong></p>
    <ul>${stopsList}</ul>
  `;
}

// Attach event listener to input for Enter key
document.getElementById('heroSearch').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    e.preventDefault();
    performRouteSearch();
  }
});


       

        // Find routes function
        function findRoutes() {
            const from = document.getElementById('fromStop').value.trim();
            const to = document.getElementById('toStop').value.trim();
            const resultsContainer = document.getElementById('searchResults');
            
            resultsContainer.innerHTML = '';
            
            if (!from || !to) {
                resultsContainer.innerHTML = `
                    <div class="result-card">
                        <p style="color: #f56565; text-align: center;">Please enter both departure and destination stops.</p>
                    </div>
                `;
                return;
            }
            
            const results = [];
            busRoutes.forEach(route => {
                const fromIndex = route.stops.findIndex(stop => 
                    normalize(stop.name).includes(normalize(from))
                );
                const toIndex = route.stops.findIndex(stop => 
                    normalize(stop.name).includes(normalize(to))
                );
                
                if (fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex) {
                    results.push({
                        route: route,
                        fromIndex: fromIndex,
                        toIndex: toIndex,
                        duration: toIndex - fromIndex,
                        stops: route.stops.slice(fromIndex, toIndex + 1)
                    });
                }
            });
            
            if (results.length === 0) {
                resultsContainer.innerHTML = `
                    <div class="result-card">
                        <p style="color: #f56565; text-align: center;">No direct routes found. Try different stops or check spelling.</p>
                    </div>
                `;
                return;
            }
            
            results.forEach((result, index) => {
                setTimeout(() => {
                    const resultCard = document.createElement('div');
                    resultCard.className = 'result-card';
                    resultCard.style.animationDelay = (index * 0.1) + 's';
                    resultCard.innerHTML = `
                        <div class="result-header">
                            <div class="bus-info">
                                <div class="bus-icon" style="background: ${result.route.color};">
                                    ${result.route.number}
                                </div>
                                <div class="bus-details">
                                    <h3>${result.route.name}</h3>
                                    <div class="bus-route">
                                        ${result.stops[0].name} → ${result.stops[result.stops.length - 1].name}
                                    </div>
                                </div>
                            </div>
                            <button class="track-button" onclick="trackBus('${result.route.number}')">
                                📍 Track Live
                            </button>
                        </div>
                        <div class="stops-preview">
                            <div class="stops-header">Route Preview (${result.stops.length} stops)</div>
                            <div class="stops-list">
                                ${result.stops.map(stop => `
                                    <span class="stop-tag">${stop.name}</span>
                                `).join('')}
                            </div>
                        </div>
                    `;
                    resultsContainer.appendChild(resultCard);
                }, index * 100);
            });
        }

        // Track specific bus
        function trackBus(busNumber) {
            document.getElementById('track').scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                const bus = busMarkers[busNumber];
                if (bus) {
                    map.setView(bus.marker.getLatLng(), 15);
                    bus.marker.openPopup();
                    
                    // Show route info
                    const routeInfo = document.getElementById('routeInfo');
                    routeInfo.innerHTML = `
                        <h3>🚌 Bus ${bus.route.number} - ${bus.route.name}</h3>
                        <p><strong>Total Stops:</strong> ${bus.route.stops.length}</p>
                        <p><strong>Current Status:</strong> En route to ${bus.route.stops[(bus.currentStopIndex + 1) % bus.route.stops.length].name}</p>
                        <div style="margin-top: 1rem;">
                            <strong>Upcoming Stops:</strong>
                            <ul style="margin-left: 1rem; margin-top: 0.5rem;">
                                ${bus.route.stops.slice(bus.currentStopIndex + 1, bus.currentStopIndex + 4).map(stop => `
                                    <li>${stop.name} - ${stop.time}</li>
                                `).join('')}
                            </ul>
                        </div>
                    `;
                    routeInfo.classList.remove('hidden');
                }
            }, 1000);
        }

        // Search on map
        function searchOnMap() {
            const query = document.getElementById('mapSearch').value.trim();
            if (!query) return;
            
            performHeroSearch(); // Reuse the same logic
        }

        // Navigation
        function initializeNavigation() {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    const target = this.getAttribute('href');
                    document.querySelector(target).scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                });
            });
            
            // Update active nav on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const activeLink = document.querySelector(`[href="#${entry.target.id}"]`);
                        if (activeLink && activeLink.classList.contains('nav-link')) {
                            navLinks.forEach(l => l.classList.remove('active'));
                            activeLink.classList.add('active');
                        }
                    }
                });
            }, { threshold: 0.3 });
            
            document.querySelectorAll('section[id]').forEach(section => {
                observer.observe(section);
            });
        }

        // Update stats
        function updateStats() {
            document.getElementById('totalRoutes').textContent = busRoutes.length;
            document.getElementById('liveBuses').textContent = busRoutes.length;
        }

        // Lite mode toggle
        document.getElementById('liteMode').addEventListener('change', function(e) {
            if (e.target.checked) {
                // Hide stop markers in lite mode
                stopMarkers.forEach(marker => marker.remove());
                routeLayers.forEach(layer => layer.remove());
            } else {
                // Show all markers
                stopMarkers.forEach(marker => marker.addTo(map));
                routeLayers.forEach(layer => layer.addTo(map));
            }
        });

        // Add smooth header background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.15)';
            } else {
                header.style.background = 'var(--glass-bg)';
            }
        });

        // Close modal on outside click
        document.getElementById('loginModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeLoginModal();
            }
        });
        // Enable Enter key on track query input
const trackInput = document.getElementById('trackQuery');
const trackBtn = document.getElementById('trackSearch');
if (trackInput) {
  trackInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      trackBtn.click();
    }
  });
}

function renderRoute(route) {
  const resultEl = document.getElementById("searchResult");
  const start = route.stops[0];
  const end = route.stops[route.stops.length - 1];
  const stopsList = route.stops.map(s => `<li>${s.name}</li>`).join("");
  let fare = calculateFare(route.stops.length);
  resultEl.innerHTML = `
    <h3>Bus Number: ${route.number} - ${route.name}</h3>
    <p><strong>Starting Point:</strong> ${start.name}</p>
    <p><strong>Ending Point:</strong> ${end.name}</p>
    <p><strong>Stops in between (${route.stops.length} total):</strong></p>
    <ul>${stopsList}</ul>
    <div class="fare-info">Fare Estimate: ₹${fare}</div>
  `;
  document.getElementById("fareInfo").style.display = "none";
}

function findRoutes() {
  const from = document.getElementById("fromStop").value.trim();
  const to = document.getElementById("toStop").value.trim();
  const resultsContainer = document.getElementById("searchResults");
  const fareInfo = document.getElementById("fareInfo");
  resultsContainer.innerHTML = "";
  fareInfo.style.display = "none";

  if (!from || !to) {
    resultsContainer.innerHTML = `
      <div class="result-card" style="color:#f56565; text-align:center;">
        Please enter both departure and destination stops.
      </div>`;
    return;
  }

  const results = [];
  busRoutes.forEach(route => {
    const fromIndex = route.stops.findIndex(stop =>
      normalize(stop.name).includes(normalize(from))
    );
    const toIndex = route.stops.findIndex(stop =>
      normalize(stop.name).includes(normalize(to))
    );
    if (
      fromIndex !== -1 &&
      toIndex !== -1 &&
      fromIndex < toIndex
    ) {
      results.push({
        route,
        fromIndex,
        toIndex,
        stopsCovered: toIndex - fromIndex + 1,
        stops: route.stops.slice(fromIndex, toIndex + 1),
      });
    }
  });

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="result-card" style="color:#f56565; text-align:center;">
        No direct routes found. Try different stops or check spelling.
      </div>`;
    return;
  }

  results.forEach((result, index) => {
    setTimeout(() => {
      const fare = calculateFare(result.stopsCovered);
      const resultCard = document.createElement("div");
      resultCard.className = "result-card";
      resultCard.style.animationDelay = index * 0.1 + "s";
      resultCard.innerHTML = `
        <div class="result-header">
          <div class="bus-info">
            <div class="bus-icon" style="background: ${result.route.color};">
            ${result.route.number}
            </div>
            <div class="bus-details">
              <h3>${result.route.name}</h3>
              <div class="bus-route">${result.stops[0].name} → ${result.stops[result.stops.length - 1].name}</div>
            </div>
          </div>
          <button class="track-button" onclick="trackBus('${result.route.number}')">📍 Track Live</button>
        </div>
        <div class="stops-preview">
          <div class="stops-header">Route Preview (${result.stops.length} stops)</div>
          <div class="stops-list">
            ${result.stops.map(stop => `<span class="stop-tag">${stop.name}</span>`).join("")}
          </div>
          <div class="fare-info" style="margin-top: 1rem;">Fare Estimate: ₹${fare}</div>
        </div>
      `;
      resultsContainer.appendChild(resultCard);
    }, index * 100);
  });

  fareInfo.style.display = "block";
 // fareInfo.textContent = `Fare depends on stops travelled: ₹5 (1-3 stops), ₹10 (4-5 stops), ₹15 (6+ stops)`;
}
/*function clearTrackedBuses() {
  Object.values(busMarkers).forEach(bus => {
    map.removeLayer(bus.marker);
  });
  busMarkers = {};
}*/
function clearTrackedBuses(){
  Object.values(busMarkers).forEach(bus => {
    map.removeLayer(bus.marker);
  });
  busMarkers = {};
  // Also clear route layers and stop markers
  routeLayers.forEach(layer => map.removeLayer(layer));
  routeLayers = [];
  stopMarkers.forEach(marker => map.removeLayer(marker));
  stopMarkers = [];
}

function trackBusOnMap(busNo){
  clearTrackedBuses(); // clear currently tracked buses before adding new

  let route = busRoutes.find(r => r.number.toLowerCase() === busNo.toLowerCase());
  if(!route) return;

  let latlngs = route.stops.map(s => [s.lat, s.lng]);
  let polyline = L.polyline(latlngs, {color: route.color, weight:5, opacity:0.7}).addTo(map);
  routeLayers.push(polyline);

  route.stops.forEach(stop => {
    let marker = L.circleMarker([stop.lat, stop.lng], {
        radius:6,
        fillColor: route.color,
        color:'#fff',
        weight:2,
        opacity:1,
        fillOpacity:.8
    }).addTo(map);
    marker.bindPopup(`<b>${stop.name}</b>`);
    stopMarkers.push(marker);
  });

  let busIcon = L.divIcon({
    html: `<div style="background:${route.color}; color:#fff; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px; border:2px solid white; box-shadow:0 2px 4px rgba(0,0,0,0.3);">🚌</div>`,
    iconSize: [30,30],
  });

  let busMarker = L.marker([route.stops[0].lat, route.stops[0].lng], {icon: busIcon}).addTo(map);
  busMarker.bindPopup(`<b>Bus ${route.number}</b><br>${route.name}`);

  busMarkers[busNo] = busMarker;

  let currentIndex = 0;

  if(simulationInterval) clearInterval(simulationInterval);
  simulationInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % route.stops.length;
    let pos = route.stops[currentIndex];
    busMarker.setLatLng(pos);
  }, 3000);

  map.fitBounds(polyline.getBounds(), {padding: [50, 50]});
}

function searchAndTrack() {
  const mapSearch = document.getElementById("mapSearch").value.trim();
  if (!mapSearch) return;
  const normSearch = normalize(mapSearch);

  const route = busRoutes.find(r => normalize(r.number) === normSearch);
  if (route) {
    trackBusOnMap(route.number);
    return;
  }

  for (const route of busRoutes) {
    const stop = route.stops.find(s => normalize(s.name).includes(normSearch));
    if (stop) {
      map.setView([stop.lat, stop.lng], 15);
      return;
    }
  }

  alert(`No bus or stop matched "${mapSearch}"!`);
}

function calculateFare(numStops) {
  if (numStops <= 3) return 5;
  else if (numStops <= 5) return 10;
  else return 15;
}

    // --- VOICE ASSISTANT FUNCTIONS ---

    function startListening() {
      const lang = document.getElementById("language").value;

      if (!("webkitSpeechRecognition" in window)) {
        alert("Your browser does not support Speech Recognition.");
        return;
      }

      recognition = new webkitSpeechRecognition();
      recognition.lang = lang;
      recognition.interimResults = false;
      recognition.continuous = false;

      recognition.onresult = async function(event) {
        const transcript = event.results[0][0].transcript;
        const voiceOutput = document.getElementById("voiceOutput");
        voiceOutput.style.display = 'block';
        document.getElementById('searchResult').style.display = 'none'; // Hide other results
        voiceOutput.innerText = `You: ${transcript}`;
        await processQuery(transcript, lang);
      };

      recognition.onerror = function(event) {
        const voiceOutput = document.getElementById("voiceOutput");
        voiceOutput.style.display = 'block';
        voiceOutput.innerText = `Error listening: ${event.error}`;
      }

      recognition.start();
    }

    function stopSpeaking() {
      if (synth) {
        synth.cancel();
      }
    }

    async function processQuery(query, lang) {
      const voiceOutput = document.getElementById("voiceOutput");
      const prompt = `
You are a helpful bus route, human-like talking voice assistant for the city of Chandigarh, India.
Here is the local bus route data. Each route has a number, name, and a list of stops with their coordinates:
${JSON.stringify(busRoutes)}

Your task is to answer the user's query based ONLY on the data provided.
1. Analyze the user's query to identify the starting point, destination, or a specific bus number.
2. If the query is about finding a route between two places, find a bus route that includes both the start and end stops. The order of stops in the array matters. If a direct route exists, state the bus route number and its name.
3. If no direct route exists, suggest a connecting route if possible (e.g., take Route X to a common stop like PGI, then switch to Route Y).
4. If the query is about the stops for a specific bus route number, list the stops for that route.
5. If you cannot find any route or information in the provided data, politely state that you couldn't find the information in your dataset. Do not use external knowledge.

Query: "${query}"
Answer briefly and clearly in ${lang.startsWith("ta") ? "Tamil" : lang.startsWith("te") ? "Telugu" : "English"}.
`;

      try {
        const response = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + GEMINI_API_KEY,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
          }
        );

        const data = await response.json();
        const geminiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't find any information on that.";
        voiceOutput.innerText += `\nAssistant: ${geminiText}`;
        speakText(geminiText, lang);
      } catch (error) {
        voiceOutput.innerText += "\nError: " + error.message;
      }
    }

    function speakText(text, lang) {
      stopSpeaking();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 1;
      synth.speak(utterance);
    }


    //addition
    // Open and close feedback modal
document.addEventListener('DOMContentLoaded', () => {
  const feedbackBtn = document.createElement('button');
  feedbackBtn.textContent = 'Feedback';
  feedbackBtn.className = 'login-btn-header';
  feedbackBtn.style.position = 'fixed';
  feedbackBtn.style.bottom = '25px';
  feedbackBtn.style.right = '25px';
  feedbackBtn.style.zIndex = '10000';
  feedbackBtn.style.transition = 'width 0.5s cubic-bezier(0.4,0,0.2,1), height 0.5s cubic-bezier(0.4,0,0.2,1), border-radius 0.5s cubic-bezier(0.4,0,0.2,1), background 0.3s ease';

  feedbackBtn.style.animation = 'bounce 2.5s infinite';  // Add bounce animation
  feedbackBtn.onclick = openFeedbackModal;
  document.body.appendChild(feedbackBtn);
});

function openFeedbackModal() {
  closeChatbot();
  document.getElementById('feedbackModal').style.display = 'flex';
  document.getElementById('feedbackSuccessMsg').style.display = 'none';
  document.getElementById('feedbackForm').reset();
}

function closeFeedbackModal() {
  document.getElementById('feedbackModal').style.display = 'none';
}


// Submit feedback function
function submitFeedback(event) {
  event.preventDefault();

  const busNumber = event.target.busNumber.value.trim();
  const condition = event.target.condition.value;
  const comments = event.target.comments.value.trim();

  if (!busNumber || !condition) {
    alert("Please fill all required fields.");
    return;
  }

  // Save feedback locally or send to server
  let feedbacks = JSON.parse(localStorage.getItem('busFeedbacks') || '[]');
  feedbacks.push({ busNumber, condition, comments, timestamp: new Date().toISOString() });
  localStorage.setItem('busFeedbacks', JSON.stringify(feedbacks));

  // Reset the form
  event.target.reset();

  // Show toast
  const toast = document.getElementById('toast');
  toast.classList.add('show');

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}


// Mock current user selection of stop for demo
let userSelectedStop = null;

// Function to monitor bus location and notify user before stop
function monitorDestinationNotification(currentBusLocation, routeStops) {
  if (!userSelectedStop) return;

  // Find index of user's stop in route
  let stopIndex = routeStops.findIndex(s => s.name === userSelectedStop);
  if (stopIndex === -1) return;

  // Get current bus index (mock example based on lat/lng proximity)
  let currentIndex = routeStops.findIndex(s => {
    // Simple distance calculation, you can use more accurate methods
    let dist = (s.lat - currentBusLocation.lat) ** 2 + (s.lng - currentBusLocation.lng) ** 2;
    return dist < 0.0001;
  });

  // If bus is 1 or 2 stops away, notify user (approx 2 min away)
  if (currentIndex !== -1 && stopIndex - currentIndex <= 2 && stopIndex - currentIndex > 0) {
    showDestinationNotification(userSelectedStop);
  }
}

function showDestinationNotification(stopName) {
  const notification = document.getElementById('destinationNotification');
  document.getElementById('upcomingStopName').innerText = stopName;
  notification.classList.remove('hidden');

  // Auto-dismiss after 10 seconds
  clearTimeout(notification.timeoutId);
  notification.timeoutId = setTimeout(() => {
    dismissNotification();
  }, 10000);
}

function dismissNotification() {
  const notification = document.getElementById('destinationNotification');
  notification.classList.add('hidden');
}

// Bus Pass Suggestions could be dynamically updated based on user data
// For demo, static cards are in HTML section

// Example: open feedback modal on button click
// Hook this with your existing UI buttons





function closeChatbot() {
  document.getElementById('chatbotBody').classList.add('hidden');
}


function toggleChatbot() {
  const container = document.getElementById('chatbotContainer');
  const body = document.getElementById('chatbotBody');

  container.classList.toggle('expanded');
  body.classList.toggle('hidden');

  if (container.classList.contains('expanded')) {
    document.getElementById('chatInput').focus();
  }
}

function appendMessage(text, fromUser = true) {
  const chatMessages = document.getElementById('chatMessages');
  const msgDiv = document.createElement('div');
  msgDiv.textContent = text;
  msgDiv.style.margin = '8px 0';
  msgDiv.style.textAlign = fromUser ? 'right' : 'left';
  msgDiv.style.color = fromUser ? 'var(--primary-gradient)' : 'black';
  msgDiv.style.opacity = 0; // start transparent
  msgDiv.style.animation = 'fadeInMessage 0.5s forwards'; // fade-in animation
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const message = input.value.trim();
  if (!message) return;
  
  appendMessage(message, true);
  input.value = '';
  
  // Show typing indicator
  const chatMessages = document.getElementById('chatMessages');
  const typingDiv = document.createElement('div');
  typingDiv.classList.add('typing-indicator');
  typingDiv.innerHTML = '<span></span><span></span><span></span>';
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Simulate typing delay
  setTimeout(() => {
    chatMessages.removeChild(typingDiv); // remove typing dots

    if(/bus \d+/i.test(message)){
      appendMessage('Bus ' + message.match(/\d+/)[0] + ' runs every 15 mins from 6am to 10pm.');
    } else if(/route to/i.test(message)){
      appendMessage('Please specify your start and end points for best route planning.');
    } else {
      appendMessage("I am still learning. Try asking about bus numbers or stops!");
    }
  }, 2000); // 2-second typing delay
}

const canvas = document.getElementById('chatBgCanvas');
const ctx = canvas.getContext('2d');
let width, height;
const particles = [];

function resize() {
  width = canvas.width = canvas.offsetWidth;
  height = canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resize);
resize();

function createParticles(num) {
  for (let i = 0; i < num; i++) {
    particles.push({
      x: Math.random()*width,
      y: Math.random()*height,
      r: Math.random()*3+1,
      dx: (Math.random()-0.5)*0.5,
      dy: (Math.random()-0.5)*0.5,
    });
  }
}
createParticles(40);

function animate() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > width) p.dx = -p.dx;
    if (p.y < 0 || p.y > height) p.dy = -p.dy;
  });
  requestAnimationFrame(animate);
}
animate();








function openPassModal(passType) {
document.getElementById('formSuccessMsg').style.display = 'none';
 document.querySelectorAll('.passForm').forEach(form => form.classList.add('hidden'));
 document.getElementById('paymentPage').classList.add('hidden');

 if(passType === 'monthly') {
 document.getElementById('monthlyForm').classList.remove('hidden');
 document.getElementById('passModalTitle').textContent = 'Apply for Monthly Pass';
 }
else if(passType === 'student') {
document.getElementById('studentForm').classList.remove('hidden');
document.getElementById('passModalTitle').textContent = 'Apply for Student Pass';
}
 else if(passType === 'senior') {
   document.getElementById('seniorForm').classList.remove('hidden');
 document.getElementById('passModalTitle').textContent = 'Apply for Senior Citizen Pass';
 }
document.getElementById('passModal').classList.add('show');
}

function closePassModal() {
document.getElementById('passModal').classList.remove('show');
document.querySelectorAll('.passForm').forEach(form => form.reset());
}

// Monthly form submission: show payment page
function handleMonthlySubmit(event) {
event.preventDefault();

 const type = document.getElementById('passType').value;
 const amount = type === '400' ? 400 : 1000;
 document.getElementById('paymentSummary').textContent = `Monthly Pass Payment: ₹${amount}`;

document.getElementById('monthlyForm').classList.add('hidden');
document.getElementById('paymentPage').classList.remove('hidden');
}

// Student form submission: show payment page
function handleStudentSubmit(event) {
event.preventDefault();

 document.getElementById('paymentSummary').textContent = `Student Pass Payment: Discounted rate`;

 document.getElementById('studentForm').classList.add('hidden');
document.getElementById('paymentPage').classList.remove('hidden');
}

// Senior form submission: normal submit
function submitPassForm(event) {
 event.preventDefault();
const form = event.target;
 form.style.display = 'none';
 document.getElementById('formSuccessMsg').style.display = 'block';
}

// Complete payment simulation
function completePayment() {
 document.getElementById('paymentPage').classList.add('hidden');
 document.getElementById('formSuccessMsg').style.display = 'block';
}

// Back to form from payment page
function goBackToForm() {
 if(!document.getElementById('monthlyForm').classList.contains('hidden'))
document.getElementById('monthlyForm').classList.remove('hidden');
 else if(!document.getElementById('studentForm').classList.contains('hidden'))
document.getElementById('studentForm').classList.remove('hidden');

 document.getElementById('paymentPage').classList.add('hidden');
}

// Attach click events for bus pass buttons
document.querySelector('.bus-pass-card:nth-child(1) .buy-link').onclick = e => { e.preventDefault(); openPassModal('monthly'); };
document.querySelector('.bus-pass-card:nth-child(2) .buy-link').onclick = e => { e.preventDefault(); openPassModal('student'); };
document.querySelector('.bus-pass-card:nth-child(3) .buy-link').onclick = e => { e.preventDefault(); openPassModal('senior'); };
