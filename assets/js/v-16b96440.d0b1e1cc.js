(self.webpackChunkrport_site=self.webpackChunkrport_site||[]).push([[298],{5946:(n,e,s)=>{"use strict";s.r(e),s.d(e,{data:()=>r});const r={key:"v-16b96440",path:"/docs/no05-client-on-other-os.html",title:"Install and run a rport client",lang:"en-DE",frontmatter:{},excerpt:"",headers:[{level:2,title:"On Mac OS (intel based)",slug:"on-mac-os-intel-based",children:[]},{level:2,title:"On Mac OS (M1/Arm based)",slug:"on-mac-os-m1-arm-based",children:[]},{level:2,title:"On OpenWRT",slug:"on-openwrt",children:[]}],filePathRelative:"docs/no05-client-on-other-os.md"}},9261:(n,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>u});var r=s(6252);const t=(0,r.uE)('<h1 id="install-and-run-a-rport-client"><a class="header-anchor" href="#install-and-run-a-rport-client">#</a> Install and run a rport client</h1><h2 id="on-mac-os-intel-based"><a class="header-anchor" href="#on-mac-os-intel-based">#</a> On Mac OS (intel based)</h2><p>Open the terminal and as an unprivileged user download the binary and put it in <code>/usr/local/bin</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -OL https://github.com/cloudradar-monitoring/rport/releases/download/0.1.28/rport_0.1.28_Darwin_x86_64.tar.gz\ntest -e /usr/local/bin/||sudo mkdir /usr/local/bin\nsudo tar xzf rport_0.1.28_Darwin_x86_64.tar.gz -C /usr/local/bin/ rport\nsudo mkdir /etc/rport\ntar xzf rport_0.1.28_Darwin_x86_64.tar.gz rport.example.conf\nsudo mv rport.example.conf /etc/rport/rport.conf\nsudo mkdir /var/log/rport\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Now open the configuration file with an editor and enter your server URL, credentials, and fingerprint.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo vim /etc/rport/rport.conf\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Before registering a service, test it with <code>rport -c /etc/rport/rport.conf</code>. You should not get any output and the new client should appear on the server.</p><p>For registering the service you have two options.</p>',8),a=(0,r.Wm)("li",null,"You run it with your own user.",-1),l=(0,r.Uk)("You create a so-called daemon user on Mac OS "),i={href:"https://gist.github.com/mwf/20cbb260ad2490d7faaa",target:"_blank",rel:"noopener noreferrer"},o=(0,r.Uk)("following this guide"),p=(0,r.Uk)("."),c=(0,r.uE)('<p>Register and run the service.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo rport --service install --service-user &lt;USERNAME&gt; -c /etc/rport/rport.conf\nsudo rport --service start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If you are in doubt the service has been created run <code>sudo launchctl list|grep rport</code>. It should list the pid on the first column to indicate rport is running.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sudo launchctl list|grep &quot;rport$&quot;\n9942\t0\trport\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If you get an output like this, the installation of the service has succeeded but rport cannot start.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sudo launchctl list|grep &quot;rport$&quot;\n-\t0\trport\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Missing write permissions to the folder <code>/usr/local/var/log/</code> are most likely the reason. Open <code>/Library/LaunchDaemons/rport.plist</code> with an editor and use <code>tmp</code> as log directory for the start-up logs.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;\n&lt;!DOCTYPE plist PUBLIC &quot;-//Apple Computer//DTD PLIST 1.0//EN&quot;\n&quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot; &gt;\n&lt;plist version=&#39;1.0&#39;&gt;\n  &lt;dict&gt;\n    &lt;key&gt;Label&lt;/key&gt;\n    &lt;string&gt;rport&lt;/string&gt;\n    &lt;key&gt;ProgramArguments&lt;/key&gt;\n    &lt;array&gt;\n      &lt;string&gt;/usr/local/bin/rport&lt;/string&gt;\n\n      &lt;string&gt;-c&lt;/string&gt;\n\n      &lt;string&gt;/etc/rport/rport.conf&lt;/string&gt;\n\n    &lt;/array&gt;\n    &lt;key&gt;UserName&lt;/key&gt;\n    &lt;string&gt;hero&lt;/string&gt;\n\n\n    &lt;key&gt;SessionCreate&lt;/key&gt;\n    &lt;true/&gt;\n    &lt;key&gt;KeepAlive&lt;/key&gt;\n    &lt;true/&gt;\n    &lt;key&gt;RunAtLoad&lt;/key&gt;\n    &lt;false/&gt;\n    &lt;key&gt;Disabled&lt;/key&gt;\n    &lt;false/&gt;\n\n    &lt;key&gt;StandardOutPath&lt;/key&gt;\n    &lt;string&gt;/tmp/rport.out.log&lt;/string&gt;\n    &lt;key&gt;StandardErrorPath&lt;/key&gt;\n    &lt;string&gt;/tmp/rport.err.log&lt;/string&gt;\n\n  &lt;/dict&gt;\n&lt;/plist&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>Now reload the service definition and check if rport starts.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo launchctl unload /Library/LaunchDaemons/rport.plist\nsudo launchctl load /Library/LaunchDaemons/rport.plist\nsudo launchctl start rport\nsudo launchctl list|grep &quot;rport$&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>By default, rport starts at boot.</p><h2 id="on-mac-os-m1-arm-based"><a class="header-anchor" href="#on-mac-os-m1-arm-based">#</a> On Mac OS (M1/Arm based)</h2><p>Coming soon.</p><h2 id="on-openwrt"><a class="header-anchor" href="#on-openwrt">#</a> On OpenWRT</h2><p>Coming soon.</p>',15),u={render:function(n,e){const s=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[t,(0,r.Wm)("ol",null,[a,(0,r.Wm)("li",null,[l,(0,r.Wm)("a",i,[o,(0,r.Wm)(s)]),p])]),c],64)}}}}]);