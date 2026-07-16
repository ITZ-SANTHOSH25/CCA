import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  // Navigation State for demo purposes
  const [currentScreen, setCurrentScreen] = useState('LOGIN'); // 'LOGIN', 'DONOR_HOME', 'DONOR_CASES', 'HOSPITAL'
  
  // Login Form States
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPassword, setDonorPassword] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalPassword, setHospitalPassword] = useState('');

  // Hospital Case Registration States
  const [regStep, setRegStep] = useState(1);
  const [patientName, setPatientName] = useState('R. Karthik');
  const [patientAge, setPatientAge] = useState('8');
  const [patientGender, setPatientGender] = useState('Male');
  const [disease, setDisease] = useState('Congenital Heart Disease');
  const [treatmentType, setTreatmentType] = useState('Heart Surgery');
  const [estCost, setEstCost] = useState('2,500,000');
  const [department, setDepartment] = useState('Cardiology');

  // Helper component for navigation simulator (Header)
  const NavigationSimulator = () => (
    <View style={styles.simNav}>
      <Text style={styles.simNavTitle}>Prototype Navigation:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.simNavScroll}>
        <TouchableOpacity 
          style={[styles.simBtn, currentScreen === 'LOGIN' && styles.simBtnActive]} 
          onPress={() => setCurrentScreen('LOGIN')}
        >
          <Text style={styles.simBtnText}>1. Login Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.simBtn, currentScreen === 'DONOR_HOME' && styles.simBtnActive]} 
          onPress={() => setCurrentScreen('DONOR_HOME')}
        >
          <Text style={styles.simBtnText}>2. Donor Portal</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.simBtn, currentScreen === 'DONOR_CASES' && styles.simBtnActive]} 
          onPress={() => setCurrentScreen('DONOR_CASES')}
        >
          <Text style={styles.simBtnText}>3. Active Cases</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.simBtn, currentScreen === 'HOSPITAL' && styles.simBtnActive]} 
          onPress={() => setCurrentScreen('HOSPITAL')}
        >
          <Text style={styles.simBtnText}>4. Hospital Portal</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#A80D15" />
      <NavigationSimulator />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* ========================================================
            SCREEN 1: LOGIN & PORTAL SELECTION
            ======================================================== */}
        {currentScreen === 'LOGIN' && (
          <View style={styles.loginBg}>
            <View style={styles.headerHeartContainer}>
              <Text style={styles.loginTitleMain}>Hope Begins</Text>
              <Text style={styles.loginTitleSub}>With <Text style={{color: '#FF8A8F', fontStyle: 'italic'}}>You</Text> ❤️</Text>
              <Text style={styles.loginTagline}>Your little help can bring big smiles.</Text>
            </View>

            {/* Donor Login Card */}
            <View style={styles.loginCard}>
              <View style={styles.iconCircleContainer}>
                <View style={styles.userCircle}>
                  <Text style={{color: '#FFF', fontSize: 18}}>👤</Text>
                </View>
              </View>
              <Text style={styles.cardTitle}>Donor Login</Text>
              <Text style={styles.cardSubtitle}>Welcome back! Please login to continue</Text>

              <TextInput
                style={styles.inputField}
                placeholder="Email or Phone Number"
                placeholderTextColor="#A1A1A1"
                value={donorEmail}
                onChangeText={setDonorEmail}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                placeholderTextColor="#A1A1A1"
                secureTextEntry
                value={donorPassword}
                onChangeText={setDonorPassword}
              />

              <View style={styles.loginActions}>
                <Text style={styles.rememberMe}>⬜ Remember me</Text>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </View>

              <TouchableOpacity style={styles.primaryRedButton} onPress={() => setCurrentScreen('DONOR_HOME')}>
                <Text style={styles.primaryButtonText}>🔒 Login</Text>
              </TouchableOpacity>

              <Text style={styles.orDivider}>OR</Text>

              <TouchableOpacity style={styles.secondaryOutlineButton}>
                <Text style={styles.secondaryButtonText}>👤 New Donor? Register</Text>
              </TouchableOpacity>
            </View>

            {/* Hospital Login Card */}
            <View style={[styles.loginCard, {marginTop: 25}]}>
              <View style={styles.iconCircleContainer}>
                <View style={[styles.userCircle, {backgroundColor: '#C2185B'}]}>
                  <Text style={{color: '#FFF', fontSize: 18}}>🏥</Text>
                </View>
              </View>
              <Text style={styles.cardTitle}>Hospital Login</Text>
              <Text style={styles.cardSubtitle}>Secure Access for Hospitals Only</Text>

              <TextInput
                style={styles.inputField}
                placeholder="Hospital Name"
                placeholderTextColor="#A1A1A1"
                value={hospitalName}
                onChangeText={setHospitalName}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                placeholderTextColor="#A1A1A1"
                secureTextEntry
                value={hospitalPassword}
                onChangeText={setHospitalPassword}
              />

              <TouchableOpacity style={[styles.primaryRedButton, {marginTop: 15}]} onPress={() => setCurrentScreen('HOSPITAL')}>
                <Text style={styles.primaryButtonText}>🔒 Login</Text>
              </TouchableOpacity>

              <Text style={styles.securityText}>🛡️ Authorized Hospitals Only{"\n"}Your data is safe with us.</Text>
            </View>
          </View>
        )}

        {/* ========================================================
            SCREEN 2: DONOR HOME PORTAL
            ======================================================== */}
        {currentScreen === 'DONOR_HOME' && (
          <View style={styles.whiteScreenContainer}>
            {/* App Header */}
            <View style={styles.donorHeader}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 24, marginRight: 8}}>❤️</Text>
                <View>
                  <Text style={styles.brandTitle}>ChildLife</Text>
                  <Text style={styles.brandSub}>Save Little Lives</Text>
                </View>
              </View>
              <Text style={{fontSize: 22}}>🔔</Text>
            </View>

            {/* Banner */}
            <View style={styles.bannerCard}>
              <View style={{flex: 1}}>
                <Text style={styles.bannerWelcome}>Welcome Donor!</Text>
                <Text style={styles.bannerHeroText}>Hope Begins{"\n"}With <Text style={{color: '#D32F2F'}}>You</Text> ❤️</Text>
                <Text style={styles.bannerQuote}>"Your little help can bring big smiles."</Text>
              </View>
              <View style={styles.bannerGraphic}>
                <Text style={{fontSize: 60}}>❤️</Text>
              </View>
            </View>

            {/* Quick Stats */}
            <View style={styles.statsRow}>
              <View style={[styles.statBox, {backgroundColor: '#D32F2F'}]}>
                <Text style={styles.statEmoji}>❤️</Text>
                <Text style={styles.statValue}>32</Text>
                <Text style={styles.statLabel}>Total Donations</Text>
              </View>
              <View style={[styles.statBox, {backgroundColor: '#C2185B'}]}>
                <Text style={styles.statEmoji}>₹</Text>
                <Text style={styles.statValue}>₹ 48,750</Text>
                <Text style={styles.statLabel}>Total Amount</Text>
              </View>
              <View style={[styles.statBox, {backgroundColor: '#E65100'}]}>
                <Text style={styles.statEmoji}>⭐</Text>
                <Text style={styles.statValue}>1,250</Text>
                <Text style={styles.statLabel}>Donation Points</Text>
              </View>
            </View>

            {/* Navigation Grid */}
            <Text style={styles.sectionHeading}>Explore Portals</Text>
            <View style={styles.portalGrid}>
              <TouchableOpacity style={styles.portalCard} onPress={() => setCurrentScreen('DONOR_CASES')}>
                <Text style={styles.portalIcon}>📋</Text>
                <Text style={styles.portalTitle}>Cases</Text>
                <Text style={styles.portalDesc}>See active children needing urgent support</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.portalCard} onPress={() => setCurrentScreen('DONOR_CASES')}>
                <Text style={styles.portalIcon}>🔍</Text>
                <Text style={styles.portalTitle}>Search</Text>
                <Text style={styles.portalDesc}>Search diseases, hospitals or locations</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* ========================================================
            SCREEN 3: DONOR - ACTIVE CASES LIST
            ======================================================== */}
        {currentScreen === 'DONOR_CASES' && (
          <View style={styles.whiteScreenContainer}>
            <View style={styles.donorHeader}>
              <Text style={styles.sectionHeading}>Children Needing Help</Text>
            </View>

            {/* Case List Item 1 */}
            <View style={styles.caseCard}>
              <View style={styles.caseProfileRow}>
                <View style={styles.avatarPlaceholder}><Text style={{fontSize: 24}}>👦</Text></View>
                <View style={{marginLeft: 12, flex: 1}}>
                  <Text style={styles.caseName}>R. Karthik</Text>
                  <Text style={styles.caseDisease}>Congenital Heart Disease</Text>
                  <Text style={styles.caseHospital}>Govt. General Hospital</Text>
                </View>
                <View style={styles.daysLeftTag}>
                  <Text style={styles.daysLeftCount}>12</Text>
                  <Text style={styles.daysLeftTxt}>Days Left</Text>
                </View>
              </View>
              
              {/* Progress Tracker */}
              <View style={styles.progressContainer}>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, {width: '50%'}]} />
                </View>
                <View style={styles.progressLabelRow}>
                  <Text style={styles.raisedAmt}>Raised: ₹ 2,50,000</Text>
                  <Text style={styles.goalAmt}>Goal: ₹ 5,00,000</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.donateBtn}>
                <Text style={styles.donateBtnText}>❤️ Donate Now</Text>
              </TouchableOpacity>
            </View>

            {/* Case List Item 2 */}
            <View style={styles.caseCard}>
              <View style={styles.caseProfileRow}>
                <View style={styles.avatarPlaceholder}><Text style={{fontSize: 24}}>👧</Text></View>
                <View style={{marginLeft: 12, flex: 1}}>
                  <Text style={styles.caseName}>M. Sneha</Text>
                  <Text style={styles.caseDisease}>Kidney Disease</Text>
                  <Text style={styles.caseHospital}>Govt. General Hospital</Text>
                </View>
                <View style={styles.daysLeftTag}>
                  <Text style={styles.daysLeftCount}>08</Text>
                  <Text style={styles.daysLeftTxt}>Days Left</Text>
                </View>
              </View>

              {/* Progress Tracker */}
              <View style={styles.progressContainer}>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, {width: '45%'}]} />
                </View>
                <View style={styles.progressLabelRow}>
                  <Text style={styles.raisedAmt}>Raised: ₹ 1,80,000</Text>
                  <Text style={styles.goalAmt}>Goal: ₹ 3,50,000</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.donateBtn}>
                <Text style={styles.donateBtnText}>❤️ Donate Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* ========================================================
            SCREEN 4: HOSPITAL DASHBOARD & CASE REGISTRATION
            ======================================================== */}
        {currentScreen === 'HOSPITAL' && (
          <View style={styles.whiteScreenContainer}>
            <View style={styles.donorHeader}>
              <View>
                <Text style={styles.brandTitle}>Govt. General Hospital</Text>
                <Text style={styles.brandSub}>Hospital Portal Access</Text>
              </View>
              <Text style={{fontSize: 24}}>🏥</Text>
            </View>

            {/* Wizard Progress Indicator */}
            <View style={styles.wizardIndicatorRow}>
              <View style={[styles.wizardStepNode, regStep >= 1 && styles.stepActive]}>
                <Text style={styles.wizardNodeText}>1</Text>
              </View>
              <View style={[styles.wizardLine, regStep >= 2 && styles.lineActive]} />
              <View style={[styles.wizardStepNode, regStep >= 2 && styles.stepActive]}>
                <Text style={styles.wizardNodeText}>2</Text>
              </View>
              <View style={[styles.wizardLine, regStep >= 3 && styles.lineActive]} />
              <View style={[styles.wizardStepNode, regStep >= 3 && styles.stepActive]}>
                <Text style={styles.wizardNodeText}>3</Text>
              </View>
            </View>

            <Text style={styles.wizardStepHeading}>
              {regStep === 1 && "Step 1 of 3: Patient Details"}
              {regStep === 2 && "Step 2 of 3: Treatment Details"}
              {regStep === 3 && "Step 3 of 3: Review & Submit"}
            </Text>

            {/* STEP 1 FORM */}
            {regStep === 1 && (
              <View style={styles.formContainer}>
                <Text style={styles.inputLabel}>Patient Name</Text>
                <TextInput style={styles.appInput} value={patientName} onChangeText={setPatientName} />

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={{flex: 0.48}}>
                    <Text style={styles.inputLabel}>Age</Text>
                    <TextInput style={styles.appInput} value={patientAge} keyboardType="numeric" onChangeText={setPatientAge} />
                  </View>
                  <View style={{flex: 0.48}}>
                    <Text style={styles.inputLabel}>Gender</Text>
                    <TextInput style={styles.appInput} value={patientGender} onChangeText={setPatientGender} />
                  </View>
                </View>

                <Text style={styles.inputLabel}>Disease / Condition</Text>
                <TextInput style={styles.appInput} value={disease} onChangeText={setDisease} />

                <TouchableOpacity style={styles.uploadDocBtn}>
                  <Text style={{color: '#D32F2F', fontWeight: 'bold'}}>📄 Upload Medical Documents</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextWizardBtn} onPress={() => setRegStep(2)}>
                  <Text style={styles.nextWizardBtnText}>Next Step ➔</Text>
                </TouchableOpacity>
              </View>
            )}

            {/* STEP 2 FORM */}
            {regStep === 2 && (
              <View style={styles.formContainer}>
                <Text style={styles.inputLabel}>Treatment Type</Text>
                <TextInput style={styles.appInput} value={treatmentType} onChangeText={setTreatmentType} />

                <Text style={styles.inputLabel}>Estimated Cost (₹)</Text>
                <TextInput style={styles.appInput} value={estCost} keyboardType="numeric" onChangeText={setEstCost} />

                <Text style={styles.inputLabel}>Hospital Department</Text>
                <TextInput style={styles.appInput} value={department} onChangeText={setDepartment} />

                <View style={styles.wizardActionRow}>
                  <TouchableOpacity style={styles.backWizardBtn} onPress={() => setRegStep(1)}>
                    <Text style={{color: '#666', fontWeight: 'bold'}}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.nextWizardBtnHalf} onPress={() => setRegStep(3)}>
                    <Text style={styles.nextWizardBtnText}>Next Step ➔</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* STEP 3 REVIEW */}
            {regStep === 3 && (
              <View style={styles.formContainer}>
                <View style={styles.reviewCard}>
                  <View style={styles.reviewRow}><Text style={styles.reviewLabel}>Patient Name:</Text><Text style={styles.reviewValue}>{patientName}</Text></View>
                  <View style={styles.reviewRow}><Text style={styles.reviewLabel}>Age / Gender:</Text><Text style={styles.reviewValue}>{patientAge} Years / {patientGender}</Text></View>
                  <View style={styles.reviewRow}><Text style={styles.reviewLabel}>Disease:</Text><Text style={styles.reviewValue}>{disease}</Text></View>
                  <View style={styles.reviewRow}><Text style={styles.reviewLabel}>Treatment:</Text><Text style={styles.reviewValue}>{treatmentType}</Text></View>
                  <View style={styles.reviewRow}><Text style={styles.reviewLabel}>Est. Cost:</Text><Text style={[styles.reviewValue, {color: '#D32F2F', fontWeight: 'bold'}]}>₹ {estCost}</Text></View>
                  <View style={styles.reviewRow}><Text style={styles.reviewLabel}>Department:</Text><Text style={styles.reviewValue}>{department}</Text></View>
                </View>

                <View style={styles.wizardActionRow}>
                  <TouchableOpacity style={styles.backWizardBtn} onPress={() => setRegStep(2)}>
                    <Text style={{color: '#666', fontWeight: 'bold'}}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.nextWizardBtnHalf, {backgroundColor: '#2E7D32'}]} 
                    onPress={() => {
                      alert('Case submitted successfully for approval!');
                      setRegStep(1);
                      setCurrentScreen('DONOR_HOME');
                    }}
                  >
                    <Text style={styles.nextWizardBtnText}>Submit Case ✓</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

// ==========================================
// STYLESHEET DEFINITIONS
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  // Simulation Navigation Styles
  simNav: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  simNavTitle: {
    color: '#AAA',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  simNavScroll: {
    paddingHorizontal: 10,
  },
  simBtn: {
    backgroundColor: '#333',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  simBtnActive: {
    backgroundColor: '#D32F2F',
  },
  simBtnText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  // SCREEN 1: LOGIN CSS
  loginBg: {
    backgroundColor: '#5C060B',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
  },
  headerHeartContainer: {
    alignItems: 'center',
    marginBottom: 35,
  },
  loginTitleMain: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFF',
  },
  loginTitleSub: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: -5,
  },
  loginTagline: {
    color: '#FFB2B5',
    fontSize: 14,
    marginTop: 8,
  },
  loginCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  iconCircleContainer: {
    alignItems: 'center',
    marginTop: -40,
    marginBottom: 10,
  },
  userCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#D32F2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardSubtitle: {
    color: '#D4C4C4',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: '#FFF',
    fontSize: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  loginActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMe: {
    color: '#C4B2B2',
    fontSize: 12,
  },
  forgotPassword: {
    color: '#FF8A8F',
    fontSize: 12,
    fontWeight: 'bold',
  },
  primaryRedButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orDivider: {
    color: '#8A7A7A',
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 12,
  },
  secondaryOutlineButton: {
    borderWidth: 1,
    borderColor: '#D32F2F',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  securityText: {
    color: '#C4B2B2',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 15,
    lineHeight: 16,
  },

  // SCREEN 2 & 3: WHITE SCREENS COMMON CSS
  whiteScreenContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  donorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  brandTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  brandSub: {
    fontSize: 11,
    color: '#666',
  },
  bannerCard: {
    backgroundColor: '#FFF1F1',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#FFD3D5',
  },
  bannerWelcome: {
    color: '#666',
    fontSize: 12,
  },
  bannerHeroText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginVertical: 5,
  },
  bannerQuote: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#888',
  },
  bannerGraphic: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  statBox: {
    flex: 0.31,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  statEmoji: {
    fontSize: 18,
    marginBottom: 4,
  },
  statValue: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 2,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 15,
  },
  portalGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portalCard: {
    flex: 0.48,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 12,
    padding: 15,
  },
  portalIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  portalTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  portalDesc: {
    fontSize: 11,
    color: '#666',
    marginTop: 4,
    lineHeight: 14,
  },

  // SCREEN 3: CASES
  caseCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  caseProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ECEFF1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caseName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },
  caseDisease: {
    fontSize: 12,
    color: '#D32F2F',
    fontWeight: '600',
    marginTop: 2,
  },
  caseHospital: {
    fontSize: 11,
    color: '#777',
  },
  daysLeftTag: {
    backgroundColor: '#FFF1F1',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD3D5',
  },
  daysLeftCount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  daysLeftTxt: {
    fontSize: 8,
    color: '#777',
  },
  progressContainer: {
    marginTop: 15,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#ECEFF1',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#D32F2F',
    borderRadius: 3,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  raisedAmt: {
    fontSize: 11,
    color: '#111',
    fontWeight: 'bold',
  },
  goalAmt: {
    fontSize: 11,
    color: '#777',
  },
  donateBtn: {
    backgroundColor: '#D32F2F',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  donateBtnText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  // SCREEN 4: HOSPITAL FORM & WIZARD CSS
  wizardIndicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  wizardStepNode: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepActive: {
    backgroundColor: '#D32F2F',
  },
  wizardNodeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  wizardLine: {
    height: 3,
    width: 60,
    backgroundColor: '#E0E0E0',
  },
  lineActive: {
    backgroundColor: '#D32F2F',
  },
  wizardStepHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 6,
  },
  appInput: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  uploadDocBtn: {
    borderWidth: 1.5,
    borderColor: '#D32F2F',
    borderStyle: 'dashed',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF8F8',
  },
  nextWizardBtn: {
    backgroundColor: '#D32F2F',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  nextWizardBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  wizardActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  backWizardBtn: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  nextWizardBtnHalf: {
    flex: 0.65,
    backgroundColor: '#D32F2F',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  reviewCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },
  reviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  reviewLabel: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: 'bold',
  },
  reviewValue: {
    color: '#1E293B',
    fontSize: 13,
  },
});