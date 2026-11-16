/* Call number swap is OFF (Kia, Nov 16, TTR-2184): every visitor, crawler or not, sees and dials the default number, (727) 855-6766.
   This file stays so the pages keep loading it without an error. It makes no request and changes nothing on the page; it only forgets a
   number an earlier visit saved in the browser. The TTR OS tracking numbers come back later as one TTR Twilio number (TTR-1339). */
(function () { try { localStorage.removeItem('pw_call_number'); } catch (e) {} })();
